"use client";
import { useRef, useState, useEffect } from "react";
import Matter from "matter-js";

interface FallingTextProps {
  text?: string;
  highlightWords?: string[];
  trigger?: "auto" | "scroll" | "click" | "hover";
  backgroundColor?: string;
  wireframes?: boolean;
  gravity?: number;
  mouseConstraintStiffness?: number;
  fontSize?: string;
}

const FallingText: React.FC<FallingTextProps> = ({
  text = "",
  highlightWords = [],
  trigger = "auto",
  backgroundColor = "transparent",
  wireframes = false,
  gravity = 0.3,
  mouseConstraintStiffness = 0.2,
  fontSize = "1rem",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const [effectStarted, setEffectStarted] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);

  useEffect(() => {
    if (!textRef.current) return;
    const words = text.split(",");

    const newHTML = words
      .map((word) => {
        const isHighlighted = highlightWords.some((hw) =>
          word.trim().startsWith(hw)
        );
        const bgColor = isHighlighted ? "#9A6AFF" : "#FFFFFF";
        const textColor = isHighlighted ? "#FFFFFF" : "#000000";

        return `
          <span
            class="inline-block select-none"
            style="
              margin: 20px 20px;
              background-color: ${bgColor};
              color: ${textColor};
              padding: 0.5rem 1rem;
              border-radius: 71.89px;
            "
          >
            ${word.trim()}
          </span>`;
      })
      .join(" ");

    textRef.current.innerHTML = newHTML;
  }, [text, highlightWords]);

  useEffect(() => {
    if (trigger === "auto") {
      setEffectStarted(true);
      return;
    }
    if (trigger === "scroll" && containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setEffectStarted(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  useEffect(() => {
    if (!effectStarted) return;

    const { Engine, Render, World, Bodies, Runner, Mouse, MouseConstraint, Body } = Matter;

    if (!containerRef.current || !canvasContainerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;
    if (width <= 0 || height <= 0) return;

    const engine = Engine.create();
    engine.world.gravity.y = gravity;

    const render = Render.create({
      element: canvasContainerRef.current,
      engine,
      options: { width, height, background: backgroundColor, wireframes },
    });

    const boundaryOptions = {
      isStatic: true,
      render: { fillStyle: "transparent" },
    };
    const floor = Bodies.rectangle(width / 2, height + 25, width, 50, boundaryOptions);
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, boundaryOptions);
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, boundaryOptions);
    const ceiling = Bodies.rectangle(width / 2, -25, width, 50, boundaryOptions);

    if (!textRef.current) return;
    const wordSpans = textRef.current.querySelectorAll("span");
    const wordBodies = [...wordSpans].map((elem) => {
      const spanRect = elem.getBoundingClientRect();
      const offsetTop = elem.offsetTop;
      const offsetLeft = elem.offsetLeft;

      const x = offsetLeft + spanRect.width / 2;
      const y = offsetTop + spanRect.height / 2;

      const body = Bodies.rectangle(x, y, spanRect.width, spanRect.height, {
        render: { fillStyle: "transparent" },
        restitution: 0.8,
        frictionAir: 0.08,
        friction: 0.3,
      });

      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 2,
        y: 0,
      });
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.03);

      elem.style.position = "absolute";
      elem.style.left = `${x}px`;
      elem.style.top = `${y}px`;
      elem.style.transform = "translate(-50%, -50%)";

      return { elem, body };
    });

    const mouse = Mouse.create(containerRef.current);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false },
      },
    });
    
    // Disable mouse constraint by default
    mouseConstraint.collisionFilter.mask = 0;

    render.mouse = mouse;

    World.add(engine.world, [
      floor,
      leftWall,
      rightWall,
      ceiling,
      mouseConstraint,
      ...wordBodies.map((wb) => wb.body),
    ]);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const update = () => {
      wordBodies.forEach(({ body, elem }) => {
        elem.style.left = `${body.position.x}px`;
        elem.style.top = `${body.position.y}px`;
        elem.style.transform = `translate(-50%, -50%) rotate(${body.angle}rad)`;
      });
      requestAnimationFrame(update);
    };
    update();

    // Event handlers for better scroll behavior
    const onMouseDown = () => {
      setIsMouseDown(true);
      mouseConstraint.collisionFilter.mask = 0xFFFFFFFF; // Enable constraint
    };

    const onMouseUp = () => {
      setIsMouseDown(false);
      mouseConstraint.collisionFilter.mask = 0; // Disable constraint
    };

    // Prevent the mouse constraint from interfering with touch events
    const preventTouch = (e: Event) => e.preventDefault();
    if (containerRef.current) {
      containerRef.current.addEventListener('mousedown', onMouseDown);
      containerRef.current.addEventListener('mouseup', onMouseUp);
      containerRef.current.addEventListener('mouseleave', onMouseUp);
      // Prevent touch events from interfering with scrolling
      containerRef.current.addEventListener('touchstart', preventTouch, { passive: false });
      containerRef.current.addEventListener('touchmove', preventTouch, { passive: false });
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('mousedown', onMouseDown);
        containerRef.current.removeEventListener('mouseup', onMouseUp);
        containerRef.current.removeEventListener('mouseleave', onMouseUp);
        containerRef.current.removeEventListener('touchstart', preventTouch);
        containerRef.current.removeEventListener('touchmove', preventTouch);
      }
      Render.stop(render);
      Runner.stop(runner);
      if (render.canvas && canvasContainerRef.current) {
        canvasContainerRef.current.removeChild(render.canvas);
      }
      World.clear(engine.world, false);
      Engine.clear(engine);
    };
  }, [effectStarted, gravity, wireframes, backgroundColor, mouseConstraintStiffness]);

  const handleTrigger = () => {
    if (!effectStarted && (trigger === "click" || trigger === "hover")) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative z-[1] w-full h-full cursor-pointer text-center pt-8 overflow-hidden"
      onClick={trigger === "click" ? handleTrigger : undefined}
      onMouseEnter={trigger === "hover" ? handleTrigger : undefined}
    >
      <div
        ref={textRef}
        className="inline-block"
        style={{ fontSize, lineHeight: 1.4 }}
      />

      <div ref={canvasContainerRef} className="absolute top-0 left-0 z-0" />
    </div>
  );
};

export default FallingText;