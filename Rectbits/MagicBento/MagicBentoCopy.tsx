import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import Image from "next/image";

type SolutionType = {
  allSubDatas?: {
    icon?: string;
    title: string;
    description: string;
    image?: string;
    buttonImage?: string;
  }[];
  layout: string;
  title: string;
  description: string;
  offlineFunctionality: {
    title: string;
    description: string;
    image: string;
    buttonImage: string;
  };
  realTimeDiagnostics: {
    title: string;
    description: string;
    image: string;
  };
  seamlessBluetoothIntegration: {
    title: string;
    description: string;
    image: string;
  };
  technologyBackbone: {
    title: string;
    description: string;
    image: string;
  };
  technicianCommandCenter: {
    title: string;
    description: string;
    image: string;
  };
  cloudPoweredAnalytics: {
    title: string;
    description: string;
    image: string;
  };
  automatedReporting: {
    title: string;
    description: string;
    image: string;
  };
  SaveandEditPlans?: {
    title: string;
    description: string;
    image: string;
  };
};

export interface BentoProps {
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
  cardDatas?: SolutionType;
}

const DEFAULT_PARTICLE_COUNT = 12;
const DEFAULT_SPOTLIGHT_RADIUS = 300;
const DEFAULT_GLOW_COLOR = "132, 0, 255";
const MOBILE_BREAKPOINT = 768;

const createParticleElement = (
  x: number,
  y: number,
  color: string = DEFAULT_GLOW_COLOR
): HTMLDivElement => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const calculateSpotlightValues = (radius: number) => ({
  proximity: radius * 0.5,
  fadeDistance: radius * 0.75,
});

const updateCardGlowProperties = (
  card: HTMLElement,
  mouseX: number,
  mouseY: number,
  glow: number,
  radius: number
) => {
  const rect = card.getBoundingClientRect();
  const relativeX = ((mouseX - rect.left) / rect.width) * 100;
  const relativeY = ((mouseY - rect.top) / rect.height) * 100;

  card.style.setProperty("--glow-x", `${relativeX}%`);
  card.style.setProperty("--glow-y", `${relativeY}%`);
  card.style.setProperty("--glow-intensity", glow.toString());
  card.style.setProperty("--glow-radius", `${radius}px`);
};

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  disableAnimations?: boolean;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
  enableTilt?: boolean;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}> = ({
  children,
  className = "",
  disableAnimations = false,
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = false,
  enableMagnetism = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);
  const magnetismAnimationRef = useRef<gsap.core.Tween | null>(null);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;

    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(
        Math.random() * width,
        Math.random() * height,
        glowColor
      )
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    magnetismAnimationRef.current?.kill();

    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        },
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;

    if (!particlesInitialized.current) {
      initializeParticles();
    }

    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;

        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);

        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
        );

        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });

        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }, index * 100);

      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    if (disableAnimations || !cardRef.current) return;

    const element = cardRef.current;

    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 5,
          rotateY: 5,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();

      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }

      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!enableTilt && !enableMagnetism) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: "power2.out",
          transformPerspective: 1000,
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;

        magnetismAnimationRef.current = gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleClick = (e: MouseEvent) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement("div");
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        {
          scale: 0,
          opacity: 1,
        },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => ripple.remove(),
        }
      );
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("click", handleClick);

    return () => {
      isHoveredRef.current = false;
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("click", handleClick);
      clearAllParticles();
    };
  }, [
    animateParticles,
    clearAllParticles,
    disableAnimations,
    enableTilt,
    enableMagnetism,
    clickEffect,
    glowColor,
  ]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative h-full`}
      style={{ ...style, position: "relative" }}
    >
      {children}
    </div>
  );
};

const GlobalSpotlight: React.FC<{
  gridRef: React.RefObject<HTMLDivElement | null>;
  disableAnimations?: boolean;
  enabled?: boolean;
  spotlightRadius?: number;
  glowColor?: string;
}> = ({
  gridRef,
  disableAnimations = false,
  enabled = true,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const spotlightRef = useRef<HTMLDivElement | null>(null);
  const isInsideSection = useRef(false);

  useEffect(() => {
    if (disableAnimations || !gridRef?.current || !enabled) return;

    const spotlight = document.createElement("div");
    spotlight.className = "global-spotlight";
    spotlight.style.cssText = `
      position: fixed;
      width: 800px;
      height: 800px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.15) 0%,
        rgba(${glowColor}, 0.08) 15%,
        rgba(${glowColor}, 0.04) 25%,
        rgba(${glowColor}, 0.02) 40%,
        rgba(${glowColor}, 0.01) 65%,
        transparent 70%
      );
      z-index: 200;
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;
    document.body.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const section = gridRef.current.closest(".bento-section");
      const rect = section?.getBoundingClientRect();
      const mouseInside =
        rect &&
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      isInsideSection.current = mouseInside || false;
      const cards = gridRef.current.querySelectorAll(".card");

      if (!mouseInside) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
        cards.forEach((card) => {
          (card as HTMLElement).style.setProperty("--glow-intensity", "0");
        });
        return;
      }

      const { proximity, fadeDistance } =
        calculateSpotlightValues(spotlightRadius);
      let minDistance = Infinity;

      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const centerX = cardRect.left + cardRect.width / 2;
        const centerY = cardRect.top + cardRect.height / 2;
        const distance =
          Math.hypot(e.clientX - centerX, e.clientY - centerY) -
          Math.max(cardRect.width, cardRect.height) / 2;
        const effectiveDistance = Math.max(0, distance);

        minDistance = Math.min(minDistance, effectiveDistance);

        let glowIntensity = 0;
        if (effectiveDistance <= proximity) {
          glowIntensity = 1;
        } else if (effectiveDistance <= fadeDistance) {
          glowIntensity =
            (fadeDistance - effectiveDistance) / (fadeDistance - proximity);
        }

        updateCardGlowProperties(
          cardElement,
          e.clientX,
          e.clientY,
          glowIntensity,
          spotlightRadius
        );
      });

      gsap.to(spotlightRef.current, {
        left: e.clientX,
        top: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });

      const targetOpacity =
        minDistance <= proximity
          ? 0.8
          : minDistance <= fadeDistance
          ? ((fadeDistance - minDistance) / (fadeDistance - proximity)) * 0.8
          : 0;

      gsap.to(spotlightRef.current, {
        opacity: targetOpacity,
        duration: targetOpacity > 0 ? 0.2 : 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      isInsideSection.current = false;
      gridRef.current?.querySelectorAll(".card").forEach((card) => {
        (card as HTMLElement).style.setProperty("--glow-intensity", "0");
      });
      if (spotlightRef.current) {
        gsap.to(spotlightRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      spotlightRef.current?.parentNode?.removeChild(spotlightRef.current);
    };
  }, [gridRef, disableAnimations, enabled, spotlightRadius, glowColor]);

  return null;
};

const BentoCardGrid: React.FC<{
  children: React.ReactNode;
  gridRef?: React.RefObject<HTMLDivElement | null>;
}> = ({ children, gridRef }) => (
  <div
    className="bento-section w-full h-full select-none relative"
    style={{ fontSize: "clamp(1rem, 0.9rem + 0.5vw, 1.5rem)" }}
    ref={gridRef}
  >
    {children}
  </div>
);

const useMobileDetection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
};

const MagicBentoCopy: React.FC<BentoProps> = ({
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
  cardDatas,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;
  const baseClassName = `
  card flex flex-col justify-between relative 
  min-h-[200px] w-full max-w-full  rounded-[24px]
  border border-solid font-light overflow-hidden
  transition-all duration-300 ease-in-out
  hover:-translate-y-0.5 
  ${enableBorderGlow ? "card--border-glow" : ""}
`;

  const cardStyle = {
    borderColor: "rgba(255, 255, 255, 0.1)", // ✅ Only override the color
    color: "var(--white)",
    "--glow-x": "50%",
    "--glow-y": "50%",
    "--glow-intensity": "0",
    "--glow-radius": "200px",
  } as React.CSSProperties;

  if (!cardDatas) {
    return null;
  }

  return (
    <>
      <style>
        {`
            .bento-section {
              --glow-x: 50%;
              --glow-y: 50%;
              --glow-intensity: 0;
              --glow-radius: 200px;
              --glow-color: ${glowColor};
              --border-color: #392e4e;
              --background-dark: #060010;
              --white: hsl(0, 0%, 100%);
              --purple-primary: rgba(132, 0, 255, 1);
              --purple-glow: rgba(132, 0, 255, 0.2);
              --purple-border: rgba(132, 0, 255, 0.8);
            }
            
            .card-responsive {
              grid-template-columns: 1fr;
              width: 90%;
              margin: 0 auto;
              padding: 0.5rem;
            }
            
            @media (min-width: 600px) {
              .card-responsive {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            
            @media (min-width: 1024px) {
              .card-responsive {
                grid-template-columns: repeat(4, 1fr);
              }
              
              .card-responsive .card:nth-child(3) {
                grid-column: span 2;
                grid-row: span 2;
              }
              
              .card-responsive .card:nth-child(4) {
                grid-column: 1 / span 2;
                grid-row: 2 / span 2;
              }
              
              .card-responsive .card:nth-child(6) {
                grid-column: 4;
                grid-row: 3;
              }
            }
            
            .card--border-glow::after {
              content: '';
              position: absolute;
              inset: 0;
              padding: 6px;
              background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                  rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
                  rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
                  transparent 60%);
              border-radius: inherit;
              mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              mask-composite: subtract;
              -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              pointer-events: none;
              transition: opacity 0.3s ease;
              z-index: 1;
            }
            
            .card--border-glow:hover::after {
              opacity: 1;
            }
            
            .card--border-glow:hover {
              box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${glowColor}, 0.2);
            }
            
            .particle::before {
              content: '';
              position: absolute;
              top: -2px;
              left: -2px;
              right: -2px;
              bottom: -2px;
              background: rgba(${glowColor}, 0.2);
              border-radius: 50%;
              z-index: -1;
            }
            
            .particle-container:hover {
              box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(${glowColor}, 0.2);
            }
            
            .text-clamp-1 {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              line-clamp: 1;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            
            .text-clamp-2 {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              overflow: hidden;
              text-overflow: ellipsis;
            }
            
            @media (max-width: 599px) {
              .card-responsive {
                grid-template-columns: 1fr;
                width: 90%;
                margin: 0 auto;
                padding: 0.5rem;
              }
              
              .card-responsive .card {
                width: 100%;
                min-height: 180px;
              }
            }
          `}
      </style>

      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      {/* Real Time Diagnostics Card */}
      <BentoCardGrid gridRef={gridRef}>
        {cardDatas.layout === "1" && (
          <>
            {/* Grid */}
            <div className="grid gap-[1rem] sm:grid-cols-2 lg:grid-cols-2">
              {cardDatas.offlineFunctionality && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className=" pt-[2rem] px-[3rem] h-full bg-[rgba(255,255,255,0.1)]  shadow-xl flex flex-col items-start lg:pb-0">
                    {/* Title and Description */}
                    <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                      {cardDatas.offlineFunctionality.title}
                    </h3>
                    <p className="text-sm text-gray-400 max-w-[456px] single-work-page-objectives-real-time-diagnostics-description">
                      {cardDatas.offlineFunctionality.description}
                    </p>
                    <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2 gap-4 mt-4">
                      {/* Main Image */}
                      {cardDatas.offlineFunctionality.image && (
                        <div className="w-full ">
                          <img
                            src={cardDatas.offlineFunctionality.image}
                            alt={cardDatas.offlineFunctionality.title}
                            width={240}
                            height={280}
                            className="w-100  h-[217px]  max-w-[230px] object-cover object-top"
                          />
                        </div>
                      )}

                      {/* Optional Button Image */}
                      {cardDatas.offlineFunctionality.buttonImage && (
                        <div className="mt-4">
                          <Image
                            src={cardDatas.offlineFunctionality.buttonImage}
                            alt="Button"
                            width={120}
                            height={40}
                            className="object-contain button-image-in-off-button-card"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {cardDatas.realTimeDiagnostics && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className="pt-[2rem] px-[3rem] bg-[rgba(255,255,255,0.1)] h-full  shadow-xl flex flex-col items-start lg:pb-0">
                    {/* Title and Description */}
                    <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                      {cardDatas.realTimeDiagnostics.title}
                    </h3>
                    <p className="text-sm text-gray-400 max-w-[456px] single-work-page-objectives-real-time-diagnostics-description">
                      {cardDatas.realTimeDiagnostics.description}
                    </p>
                    {/* Main Image */}
                    {cardDatas.realTimeDiagnostics.image && (
                      <div className="w-full  mx-auto block mt-4">
                        <img
                          src={cardDatas.realTimeDiagnostics.image}
                          alt={cardDatas.realTimeDiagnostics.title}
                          width={230}
                          height={280}
                          className="w-100  h-[217px]  max-w-[230px] object-cover object-top block mx-auto"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="grid lg:grid-cols-[0.7fr_1.3fr_0.7fr] sm:grid-cols-1 gap-[1rem] my-[1rem] bg-black text-white">
              {/* Column 1 */}
              {"seamlessBluetoothIntegration" in cardDatas && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className="bg-[rgba(255,255,255,0.1)] px-[1.5rem] pt-[1.5rem] rounded-2xl flex flex-col justify-between shadow-lg lg:pb-0 overflow-hidden h-full">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 single-page-solution-cards-title">
                        {cardDatas.seamlessBluetoothIntegration.title}
                      </h3>
                      <p className="text-sm text-gray-400 mb-4 single-work-page-objectives-real-time-diagnostics-description">
                        {cardDatas.seamlessBluetoothIntegration.description}
                      </p>
                    </div>
                    <div className="relative w-full h-48 rounded-lg overflow-hidden -mb-5">
                      <Image
                        src={cardDatas.seamlessBluetoothIntegration.image}
                        alt="Bluetooth Integration"
                        fill
                        className="max-h-[280px] object-cover "
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Column 2 */}
              {"technologyBackbone" in cardDatas && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className="bg-[rgba(255,255,255,0.1)] h-full rounded-2xl pt-[2rem] px-[3rem] flex flex-col justify-between shadow-lg overflow-hidden">
                    <h3 className="text-xl font-semibold mb-3 single-page-solution-cards-title">
                      {cardDatas.technologyBackbone.title}
                    </h3>
                    <p className="text-sm text-gray-400 single-work-page-objectives-real-time-diagnostics-description">
                      {cardDatas.technologyBackbone.description}
                    </p>
                    <div className="relative w-full h-[252px] -ml-13 rounded-lg overflow-hidden indevisual-page-solution-cards-image-container">
                      <img
                        src={cardDatas.technologyBackbone.image}
                        alt={cardDatas.technologyBackbone.title}
                        className=" object-cover object-top w-100  h-full max-w-[500px]  max-h-[252px] single-work-page-objectives-real-time-diagnostics-description-image"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Column 3 */}
              {"technicianCommandCenter" in cardDatas && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className="bg-[rgba(255,255,255,0.1)] px-[1.5rem] pt-[1.5rem] rounded-2xl flex flex-col justify-between shadow-lg lg:pb-0 overflow-hidden h-full">
                    <h3 className="text-xl font-semibold mb-3 single-page-solution-cards-title">
                      {cardDatas.technicianCommandCenter.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-8 single-work-page-objectives-real-time-diagnostics-description">
                      {cardDatas.technicianCommandCenter.description}
                    </p>
                    <div className="relative w-full h-[200px] rounded-lg overflow-hidden -mb-8">
                      <Image
                        src={cardDatas.technicianCommandCenter.image}
                        alt="Command Center"
                        fill
                        className="max-h-[300px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Grid */}
            <div className="grid gap-[1rem] sm:grid-cols-2 lg:grid-cols-2 ">
              {cardDatas.cloudPoweredAnalytics && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className="bg-[rgba(255,255,255,0.1)] h-fit pt-[2rem] px-[2rem]  shadow-xl flex flex-col items-start lg:pb-0 lg:pr-0 overflow-hidden">
                    {/* Title and Description */}
                    <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                      {cardDatas.cloudPoweredAnalytics.title}
                    </h3>
                    <p className="text-sm text-gray-400 max-w-[456px] single-work-page-objectives-real-time-diagnostics-description">
                      {cardDatas.cloudPoweredAnalytics.description}
                    </p>
                    {/* Main Image */}
                    {cardDatas.cloudPoweredAnalytics.image && (
                      <div className="w-full  ml-auto block mt-4">
                        <img
                          src={cardDatas.cloudPoweredAnalytics.image}
                          alt={cardDatas.cloudPoweredAnalytics.title}
                          width={240}
                          height={280}
                          className="w-full h-[217px]   block ml-auto  object-cover object-top"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
              {cardDatas.automatedReporting && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className="h-full pt-[2rem] px-[2rem] bg-[rgba(255,255,255,0.1)]  shadow-xl flex flex-col justify-between items-start lg:pb-0">
                    {/* Title and Description */}
                    <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                      {cardDatas.automatedReporting.title}
                    </h3>
                    <p className="text-sm text-gray-400 max-w-[456px] single-work-page-objectives-real-time-diagnostics-description">
                      {cardDatas.automatedReporting.description}
                    </p>
                    {/* Main Image */}
                    {cardDatas.automatedReporting.image && (
                      <div className="w-full  mx-auto block mt-4">
                        <img
                          src={cardDatas.automatedReporting.image}
                          alt={cardDatas.automatedReporting.title}
                          width={240}
                          height={280}
                          className="w-100 h-[217px]  block mx-auto object-cover object-top"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </>
        )}{" "}
        {cardDatas.layout === "2" && (
          <>
            <div className="grid gap-[1rem] sm:grid-cols-1 lg:grid-cols-2">
              {cardDatas.offlineFunctionality && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className="bg-[rgba(255,255,255,0.1)] h-full shadow-xl flex flex-col lg:flex-row items-center justify-center lg:justify-between pb-4 lg:pb-0">
                    <div className="p-6">
                      {/* Title and Description */}
                      <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                        {cardDatas.offlineFunctionality.title}
                      </h3>
                      <p className="text-sm text-gray-400 max-w-[456px] single-work-page-objectives-real-time-diagnostics-description">
                        {cardDatas.offlineFunctionality.description}
                      </p>
                    </div>
                    <div className="">
                      {/* Main Image */}
                      {cardDatas.offlineFunctionality.image && (
                        <div className="w-full ">
                          <img
                            src={cardDatas.offlineFunctionality.image}
                            alt={cardDatas.offlineFunctionality.title}
                            width={304}
                            height={280}
                            className="object-cover object-top"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {cardDatas.realTimeDiagnostics && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className="bg-[rgba(255,255,255,0.1)] h-full shadow-xl flex flex-col lg:flex-row items-center justify-center lg:justify-between pb-4 lg:pb-0">
                    <div className="p-6">
                      {/* Title and Description */}
                      <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                        {cardDatas.realTimeDiagnostics.title}
                      </h3>
                      <p className="text-sm text-gray-400 max-w-[456px] single-work-page-objectives-real-time-diagnostics-description">
                        {cardDatas.realTimeDiagnostics.description}
                      </p>
                    </div>
                    {/* Main Image */}
                    {cardDatas.realTimeDiagnostics.image && (
                      <div className="">
                        <img
                          src={cardDatas.realTimeDiagnostics.image}
                          alt={cardDatas.realTimeDiagnostics.title}
                          width={304}
                          height={280}
                          className="object-cover object-top"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-[1rem] my-[1rem] bg-black text-white">
              {/* Column 2 */}
              {"technologyBackbone" in cardDatas && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-[3rem] pb-0 h-full shadow-lg overflow-hidden flex flex-col justify-between">
                    <h3 className="text-xl font-semibold mb-3 single-page-solution-cards-title">
                      {cardDatas.technologyBackbone.title}
                    </h3>
                    <p className="text-sm text-gray-400 single-work-page-objectives-real-time-diagnostics-description">
                      {cardDatas.technologyBackbone.description}
                    </p>
                    <div className="relative w-full h-full -ml-13 mt-6  rounded-lg overflow-hidden indevisual-page-solution-cards-image-container">
                      <Image
                        src={cardDatas.technologyBackbone.image}
                        alt="Technology Stack"
                        width={500}
                        height={250}
                        className="max-w-[500px] max-h-[280px] -mb-6"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-[1rem]">
                {/* Column 1 */}
                {"seamlessBluetoothIntegration" in cardDatas && (
                  <div
                    className={baseClassName}
                    style={cardStyle}
                    ref={(el) => {
                      if (!el) return;

                      const handleMouseMove = (e: MouseEvent) => {
                        if (shouldDisableAnimations) return;

                        const rect = el.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;

                        if (enableTilt) {
                          const rotateX = ((y - centerY) / centerY) * -10;
                          const rotateY = ((x - centerX) / centerX) * 10;

                          gsap.to(el, {
                            rotateX,
                            rotateY,
                            duration: 0.1,
                            ease: "power2.out",
                            transformPerspective: 1000,
                          });
                        }

                        if (enableMagnetism) {
                          const magnetX = (x - centerX) * 0.05;
                          const magnetY = (y - centerY) * 0.05;

                          gsap.to(el, {
                            x: magnetX,
                            y: magnetY,
                            duration: 0.3,
                            ease: "power2.out",
                          });
                        }
                      };

                      const handleMouseLeave = () => {
                        if (shouldDisableAnimations) return;

                        if (enableTilt) {
                          gsap.to(el, {
                            rotateX: 0,
                            rotateY: 0,
                            duration: 0.3,
                            ease: "power2.out",
                          });
                        }

                        if (enableMagnetism) {
                          gsap.to(el, {
                            x: 0,
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out",
                          });
                        }
                      };

                      const handleClick = (e: MouseEvent) => {
                        if (!clickEffect || shouldDisableAnimations) return;

                        const rect = el.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;

                        const maxDistance = Math.max(
                          Math.hypot(x, y),
                          Math.hypot(x - rect.width, y),
                          Math.hypot(x, y - rect.height),
                          Math.hypot(x - rect.width, y - rect.height)
                        );

                        const ripple = document.createElement("div");
                        ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                        el.appendChild(ripple);

                        gsap.fromTo(
                          ripple,
                          {
                            scale: 0,
                            opacity: 1,
                          },
                          {
                            scale: 1,
                            opacity: 0,
                            duration: 0.8,
                            ease: "power2.out",
                            onComplete: () => ripple.remove(),
                          }
                        );
                      };

                      el.addEventListener("mousemove", handleMouseMove);
                      el.addEventListener("mouseleave", handleMouseLeave);
                      el.addEventListener("click", handleClick);
                    }}
                  >
                    <div className="h-full bg-[rgba(255,255,255,0.1)] rounded-2xl flex flex-col lg:flex-row justify-between items-center  shadow-lg lg:pb-0 overflow-hidden">
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 single-page-solution-cards-title">
                          {cardDatas.seamlessBluetoothIntegration.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-4 single-work-page-objectives-real-time-diagnostics-description">
                          {cardDatas.seamlessBluetoothIntegration.description}
                        </p>
                      </div>
                      <div className="relative w-full h-48 rounded-lg overflow-hidden ">
                        <Image
                          src={cardDatas.seamlessBluetoothIntegration.image}
                          alt="Bluetooth Integration"
                          fill
                          className="max-h-[280px]  object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Column 3 */}
                {"technicianCommandCenter" in cardDatas && (
                  <div
                    className={baseClassName}
                    style={cardStyle}
                    ref={(el) => {
                      if (!el) return;

                      const handleMouseMove = (e: MouseEvent) => {
                        if (shouldDisableAnimations) return;

                        const rect = el.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;

                        if (enableTilt) {
                          const rotateX = ((y - centerY) / centerY) * -10;
                          const rotateY = ((x - centerX) / centerX) * 10;

                          gsap.to(el, {
                            rotateX,
                            rotateY,
                            duration: 0.1,
                            ease: "power2.out",
                            transformPerspective: 1000,
                          });
                        }

                        if (enableMagnetism) {
                          const magnetX = (x - centerX) * 0.05;
                          const magnetY = (y - centerY) * 0.05;

                          gsap.to(el, {
                            x: magnetX,
                            y: magnetY,
                            duration: 0.3,
                            ease: "power2.out",
                          });
                        }
                      };

                      const handleMouseLeave = () => {
                        if (shouldDisableAnimations) return;

                        if (enableTilt) {
                          gsap.to(el, {
                            rotateX: 0,
                            rotateY: 0,
                            duration: 0.3,
                            ease: "power2.out",
                          });
                        }

                        if (enableMagnetism) {
                          gsap.to(el, {
                            x: 0,
                            y: 0,
                            duration: 0.3,
                            ease: "power2.out",
                          });
                        }
                      };

                      const handleClick = (e: MouseEvent) => {
                        if (!clickEffect || shouldDisableAnimations) return;

                        const rect = el.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;

                        const maxDistance = Math.max(
                          Math.hypot(x, y),
                          Math.hypot(x - rect.width, y),
                          Math.hypot(x, y - rect.height),
                          Math.hypot(x - rect.width, y - rect.height)
                        );

                        const ripple = document.createElement("div");
                        ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                        el.appendChild(ripple);

                        gsap.fromTo(
                          ripple,
                          {
                            scale: 0,
                            opacity: 1,
                          },
                          {
                            scale: 1,
                            opacity: 0,
                            duration: 0.8,
                            ease: "power2.out",
                            onComplete: () => ripple.remove(),
                          }
                        );
                      };

                      el.addEventListener("mousemove", handleMouseMove);
                      el.addEventListener("mouseleave", handleMouseLeave);
                      el.addEventListener("click", handleClick);
                    }}
                  >
                    <div className="bg-[rgba(255,255,255,0.1)] h-full rounded-2xl flex flex-col  justify-between items-center lg:flex-row-reverse shadow-lg overflow-hidden">
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 single-page-solution-cards-title">
                          {cardDatas.technicianCommandCenter.title}
                        </h3>
                        <p className="text-sm text-gray-400 mb-8 single-work-page-objectives-real-time-diagnostics-description">
                          {cardDatas.technicianCommandCenter.description}
                        </p>
                      </div>
                      <div className="relative w-full h-48 rounded-lg overflow-hidden ">
                        <Image
                          src={cardDatas.technicianCommandCenter.image}
                          alt="Command Center"
                          fill
                          className="max-h-[300px] object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Grid */}
            <div className="grid gap-[1rem] sm:grid-cols-2 lg:grid-cols-3">
              {cardDatas.cloudPoweredAnalytics && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className="bg-[rgba(255,255,255,0.1)] h-full  shadow-xl flex flex-col items-start lg:pb-0">
                    <div className="pt-6 pl-6 pr-6">
                      {/* Title and Description */}
                      <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                        {cardDatas.cloudPoweredAnalytics.title}
                      </h3>
                      <p className="text-sm text-gray-400 max-w-[456px] single-work-page-objectives-real-time-diagnostics-description">
                        {cardDatas.cloudPoweredAnalytics.description}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 mt-4">
                      {/* Main Image */}
                      {cardDatas.cloudPoweredAnalytics.image && (
                        <div className="w-full pr-[24px]">
                          <img
                            src={cardDatas.cloudPoweredAnalytics.image}
                            alt={cardDatas.cloudPoweredAnalytics.title}
                            width={400}
                            height={280}
                            className=" max-h-[235px]  object-cover object-top"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {cardDatas.automatedReporting && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className=" h-full bg-[rgba(255,255,255,0.1)]   shadow-xl flex flex-col items-end lg:pb-0">
                    <div className="pt-6 pl-6 pr-6">
                      {/* Title and Description */}
                      <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                        {cardDatas.automatedReporting.title}
                      </h3>
                      <p className="text-sm text-gray-400 max-w-[456px] single-work-page-objectives-real-time-diagnostics-description">
                        {cardDatas.automatedReporting.description}
                      </p>
                    </div>

                    <div className="grid relative grid-cols-1  lg:grid-cols-1 gap-4 mt-4 ">
                      {/* Main Image */}
                      {cardDatas.automatedReporting.image && (
                        <div className="w-full ">
                          <img
                            src={cardDatas.automatedReporting.image}
                            alt={cardDatas.automatedReporting.title}
                            width={400}
                            height={280}
                            className="max-h-[235px] ml-[24px] object-cover object-top"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {cardDatas.SaveandEditPlans && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className=" h-full bg-[rgba(255,255,255,0.1)]  shadow-xl flex flex-col items-end lg:pb-0">
                    <div className="pt-6 pl-6 pr-6">
                      {/* Title and Description */}
                      <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                        {cardDatas.SaveandEditPlans.title}
                      </h3>
                      <p className="text-sm text-gray-400 max-w-[456px] single-work-page-objectives-real-time-diagnostics-description">
                        {cardDatas.SaveandEditPlans.description}
                      </p>
                    </div>
                    <div className="grid relative grid-cols-1  lg:grid-cols-1 gap-4 mt-4 ">
                      {/* Main Image */}
                      {cardDatas.SaveandEditPlans.image && (
                        <div className="w-full ">
                          <img
                            src={cardDatas.SaveandEditPlans.image}
                            alt={cardDatas.SaveandEditPlans.title}
                            width={400}
                            height={280}
                            className="ml-[24px] max-h-[235px] object-cover object-top"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
        {cardDatas.layout === "3" &&
          cardDatas.allSubDatas.map((_, rowIndex) => {
            if (rowIndex % 3 !== 0) return null; // Only render once per row group (every 3 items)

            const cardsInRow = cardDatas.allSubDatas.slice(
              rowIndex,
              rowIndex + 3
            );
            const isFirstRow = rowIndex === 0;

            const gridClass = isFirstRow
              ? "grid lg:grid-cols-[0.7fr_1.3fr_0.7fr] gap-4 mb-6"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6";

            return (
              <div key={`row-${rowIndex}`} className={gridClass}>
                {cardsInRow.map((cardColumn, columnIndex) => {
                  const index = rowIndex + columnIndex;

                  return (
                    <div
                      key={`card-${index}`}
                      className={baseClassName}
                      style={cardStyle}
                      ref={(el) => {
                        if (!el) return;

                        const handleMouseMove = (e: MouseEvent) => {
                          if (shouldDisableAnimations) return;

                          const rect = el.getBoundingClientRect();
                          const x = e.clientX - rect.left;
                          const y = e.clientY - rect.top;
                          const centerX = rect.width / 2;
                          const centerY = rect.height / 2;

                          if (enableTilt) {
                            const rotateX = ((y - centerY) / centerY) * -10;
                            const rotateY = ((x - centerX) / centerX) * 10;

                            gsap.to(el, {
                              rotateX,
                              rotateY,
                              duration: 0.1,
                              ease: "power2.out",
                              transformPerspective: 1000,
                            });
                          }

                          if (enableMagnetism) {
                            const magnetX = (x - centerX) * 0.05;
                            const magnetY = (y - centerY) * 0.05;

                            gsap.to(el, {
                              x: magnetX,
                              y: magnetY,
                              duration: 0.3,
                              ease: "power2.out",
                            });
                          }
                        };

                        const handleMouseLeave = () => {
                          if (shouldDisableAnimations) return;

                          if (enableTilt) {
                            gsap.to(el, {
                              rotateX: 0,
                              rotateY: 0,
                              duration: 0.3,
                              ease: "power2.out",
                            });
                          }

                          if (enableMagnetism) {
                            gsap.to(el, {
                              x: 0,
                              y: 0,
                              duration: 0.3,
                              ease: "power2.out",
                            });
                          }
                        };

                        const handleClick = (e: MouseEvent) => {
                          if (!clickEffect || shouldDisableAnimations) return;

                          const rect = el.getBoundingClientRect();
                          const x = e.clientX - rect.left;
                          const y = e.clientY - rect.top;

                          const maxDistance = Math.max(
                            Math.hypot(x, y),
                            Math.hypot(x - rect.width, y),
                            Math.hypot(x, y - rect.height),
                            Math.hypot(x - rect.width, y - rect.height)
                          );

                          const ripple = document.createElement("div");
                          ripple.style.cssText = `
                    position: absolute;
                    width: ${maxDistance * 2}px;
                    height: ${maxDistance * 2}px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                    left: ${x - maxDistance}px;
                    top: ${y - maxDistance}px;
                    pointer-events: none;
                    z-index: 1000;
                  `;

                          el.appendChild(ripple);

                          gsap.fromTo(
                            ripple,
                            { scale: 0, opacity: 1 },
                            {
                              scale: 1,
                              opacity: 0,
                              duration: 0.8,
                              ease: "power2.out",
                              onComplete: () => ripple.remove(),
                            }
                          );
                        };

                        el.addEventListener("mousemove", handleMouseMove);
                        el.addEventListener("mouseleave", handleMouseLeave);
                        el.addEventListener("click", handleClick);
                      }}
                    >
                      <div className="flex-1 p-6 pb-6 sm:pb-0 bg-[rgba(255,255,255,0.1)] shadow-xl flex items-start justify-center">
                        <div>
                          {cardColumn.icon && (
                            <Image
                              src={cardColumn.icon}
                              alt="Icon"
                              width={50}
                              height={50}
                              className="object-contain mb-4"
                            />
                          )}
                          <h3 className="text-lg font-semibold mb-2 single-work-page-objectives-real-time-diagnostics-title">
                            {cardColumn.title}
                          </h3>
                          <p className="text-sm text-gray-400 single-work-page-objectives-real-time-diagnostics-description">
                            {cardColumn.description}
                          </p>
                          {cardColumn.image && (
                            <Image
                              src={cardColumn.image}
                              alt="Image"
                              width={522}
                              height={234}
                              className="object-contain"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        {cardDatas?.layout === "4" && (
          <>
            <div className="grid gap-[1rem] grid-cols-1 sm:grid-cols-2">
              {cardDatas.offlineFunctionality && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className="bg-[rgba(255,255,255,0.1)]  h-fit  shadow-xl flex justify-between items-center flex-col sm:flex-row lg:pb-0">
                    <div className="p-6">
                      {/* Title and Description */}
                      <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                        {cardDatas.offlineFunctionality.title}
                      </h3>
                      <p className="text-sm text-gray-400 max-w-[456px] single-work-page-objectives-real-time-diagnostics-description">
                        {cardDatas.offlineFunctionality.description}
                      </p>
                    </div>
                    <div className="">
                      {/* Main Image */}
                      {cardDatas.offlineFunctionality.image && (
                        <div className="w-full ">
                          <img
                            src={cardDatas.offlineFunctionality.image}
                            alt={cardDatas.offlineFunctionality.title}
                            width={304}
                            height={280}
                            className="object-cover object-top"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              {cardDatas.realTimeDiagnostics && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className=" h-full bg-[rgba(255,255,255,0.1)]   shadow-xl flex justify-between items-center flex-col sm:flex-row lg:pb-0">
                    <div className="p-6">
                      {/* Title and Description */}
                      <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                        {cardDatas.realTimeDiagnostics.title}
                      </h3>
                      <p className="text-sm text-gray-400 max-w-[456px] single-work-page-objectives-real-time-diagnostics-description">
                        {cardDatas.realTimeDiagnostics.description}
                      </p>
                    </div>
                    {/* Main Image */}
                    {cardDatas.realTimeDiagnostics.image && (
                      <div className="">
                        <img
                          src={cardDatas.realTimeDiagnostics.image}
                          alt={cardDatas.realTimeDiagnostics.title}
                          width={304}
                          height={280}
                          className="object-cover object-top"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[0.7fr_1.3fr_0.7fr] gap-[1rem] my-[1rem] bg-black text-white">
              {/* Column 1 */}
              {"seamlessBluetoothIntegration" in cardDatas && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-6 shadow-lg lg:pb-0 overflow-hidden h-full">
                    <h3 className="text-xl font-semibold mb-3 single-page-solution-cards-title">
                      {cardDatas.seamlessBluetoothIntegration.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-4 single-work-page-objectives-real-time-diagnostics-description">
                      {cardDatas.seamlessBluetoothIntegration.description}
                    </p>
                    <div className="relative w-full h-55 rounded-lg overflow-hidden -mb-8">
                      <Image
                        src={cardDatas.seamlessBluetoothIntegration.image}
                        alt="Bluetooth Integration"
                        fill
                        className="max-h-[280px] "
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Column 2 */}
              {"technologyBackbone" in cardDatas && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className="bg-[rgba(255,255,255,0.1)] h-full rounded-2xl p-6 shadow-lg overflow-hidden pb-0">
                    <h3 className="text-xl font-semibold mb-3 single-page-solution-cards-title">
                      {cardDatas.technologyBackbone.title}
                    </h3>
                    <p className="text-sm text-gray-400 single-work-page-objectives-real-time-diagnostics-description">
                      {cardDatas.technologyBackbone.description}
                    </p>
                    <div className="relative w-full  -ml-6 rounded-lg overflow-hidden option-4-card-image  bottom-0">
                      <img
                        src={cardDatas.technologyBackbone.image}
                        alt={cardDatas.technologyBackbone.title}
                        className="  object-cover object-top  "
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Column 3 */}
              {"technicianCommandCenter" in cardDatas && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className="bg-[rgba(255,255,255,0.1)] rounded-2xl p-6 shadow-lg overflow-hidden h-full">
                    <h3 className="text-xl font-semibold mb-3 single-page-solution-cards-title">
                      {cardDatas.technicianCommandCenter.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-8 single-work-page-objectives-real-time-diagnostics-description">
                      {cardDatas.technicianCommandCenter.description}
                    </p>
                    <div className="relative w-full h-[200px] rounded-lg overflow-hidden -mb-8">
                      <Image
                        src={cardDatas.technicianCommandCenter.image}
                        alt="Command Center"
                        fill
                        className="max-h-[300px] object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="grid gap-[1rem] sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr] ">
              {cardDatas.cloudPoweredAnalytics && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className="bg-[rgba(255,255,255,0.1)] h-fit p-6  shadow-xl flex flex-col items-start lg:pb-0 lg:pr-0 overflow-hidden">
                    {/* Title and Description */}
                    <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                      {cardDatas.cloudPoweredAnalytics.title}
                    </h3>
                    <p className="text-sm text-gray-400 max-w-[456px] single-work-page-objectives-real-time-diagnostics-description">
                      {cardDatas.cloudPoweredAnalytics.description}
                    </p>
                    {/* Main Image */}
                    {cardDatas.cloudPoweredAnalytics.image && (
                      <div className="w-full  ml-auto block mt-4">
                        <img
                          src={cardDatas.cloudPoweredAnalytics.image}
                          alt={cardDatas.cloudPoweredAnalytics.title}
                          width={240}
                          height={280}
                          className="w-full h-[217px]   block ml-auto object-cover object-top"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
              {cardDatas.automatedReporting && (
                <div
                  className={baseClassName}
                  style={cardStyle}
                  ref={(el) => {
                    if (!el) return;

                    const handleMouseMove = (e: MouseEvent) => {
                      if (shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      const centerX = rect.width / 2;
                      const centerY = rect.height / 2;

                      if (enableTilt) {
                        const rotateX = ((y - centerY) / centerY) * -10;
                        const rotateY = ((x - centerX) / centerX) * 10;

                        gsap.to(el, {
                          rotateX,
                          rotateY,
                          duration: 0.1,
                          ease: "power2.out",
                          transformPerspective: 1000,
                        });
                      }

                      if (enableMagnetism) {
                        const magnetX = (x - centerX) * 0.05;
                        const magnetY = (y - centerY) * 0.05;

                        gsap.to(el, {
                          x: magnetX,
                          y: magnetY,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleMouseLeave = () => {
                      if (shouldDisableAnimations) return;

                      if (enableTilt) {
                        gsap.to(el, {
                          rotateX: 0,
                          rotateY: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }

                      if (enableMagnetism) {
                        gsap.to(el, {
                          x: 0,
                          y: 0,
                          duration: 0.3,
                          ease: "power2.out",
                        });
                      }
                    };

                    const handleClick = (e: MouseEvent) => {
                      if (!clickEffect || shouldDisableAnimations) return;

                      const rect = el.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;

                      const maxDistance = Math.max(
                        Math.hypot(x, y),
                        Math.hypot(x - rect.width, y),
                        Math.hypot(x, y - rect.height),
                        Math.hypot(x - rect.width, y - rect.height)
                      );

                      const ripple = document.createElement("div");
                      ripple.style.cssText = `
                                                position: absolute;
                                                width: ${maxDistance * 2}px;
                                                height: ${maxDistance * 2}px;
                                                border-radius: 50%;
                                                background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
                                                left: ${x - maxDistance}px;
                                                top: ${y - maxDistance}px;
                                                pointer-events: none;
                                                z-index: 1000;
                                              `;

                      el.appendChild(ripple);

                      gsap.fromTo(
                        ripple,
                        {
                          scale: 0,
                          opacity: 1,
                        },
                        {
                          scale: 1,
                          opacity: 0,
                          duration: 0.8,
                          ease: "power2.out",
                          onComplete: () => ripple.remove(),
                        }
                      );
                    };

                    el.addEventListener("mousemove", handleMouseMove);
                    el.addEventListener("mouseleave", handleMouseLeave);
                    el.addEventListener("click", handleClick);
                  }}
                >
                  <div className="h-full p-6 bg-[rgba(255,255,255,0.1)]  shadow-xl flex flex-col  justify-center lg:pb-0 ">
                    {/* Title and Description */}
                    <h3 className="text-lg font-semibold mb-2 single-page-solution-cards-title">
                      {cardDatas.automatedReporting.title}
                    </h3>
                    <p className="text-sm text-gray-400 max-w-[456px] single-work-page-objectives-real-time-diagnostics-description">
                      {cardDatas.automatedReporting.description}
                    </p>
                    {/* Main Image */}
                    {cardDatas.automatedReporting.image && (
                      <div className="w-full  mx-auto block mt-4">
                        <img
                          src={cardDatas.automatedReporting.image}
                          alt={cardDatas.automatedReporting.title}
                          width={240}
                          height={280}
                          className="w-100 h-[217px]  block mx-auto object-cover object-top"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </BentoCardGrid>
    </>
  );
};

export default MagicBentoCopy;
