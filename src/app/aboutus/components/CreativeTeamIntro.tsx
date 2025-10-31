"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import PlexusBackground from "./PlexusBackground";

interface TeamData {
  id: number;
  title: string;
  tags: string[];
  description: string;
  images: string[];
  name: string;
  role: string;
  bannerimage: string;
}
const teamDatas: TeamData[] = [
  {
    id: 1,
    title: "Has more Illustrator shortcuts memorized than song lyrics.",
    tags: [
      "Digital Marketing",
      "Brand Strategist",
      "AI Tools",
      "Graphic Design",
      "SEO Specialist",
      "Concept Art",
    ],
    description:
      "Ramkrishna, the force behind Third Eye Creative — the Founder, CEO, and Creative Director who wears many hats with ease. Whether it’s managing teams, handling clients, or diving deep into design, he brings unmatched energy and passion to everything he does. A master of tools like Illustrator and Photoshop, he's always pushing creative boundaries, fueled by his love for AI, music, geopolitics, and lifelong learning.",
    images: ["/assets/Ram 2.webp"],
    name: "RAMKRISHNA IYENGAR",
    role: "Founder, CEO & Creative Director",
    bannerimage: "/assets/Ram 2-small.png",
  },

  {
    id: 2,
    title: "Writes more scalable systems than grocery lists.",
    tags: [
      "Backend Master",
      "Full-Stack Versatile",
      "Calm & Confident",
      "Can-Do Attitude",
    ],
    description:
      "Siddarth is the brain behind all the tech innovations at Third Eye Creative. A genius in system architecture and AI, he leads the development of our most ambitious projects with precision and vision. When he’s not building scalable systems or experimenting with emerging technologies, you’ll find him trading the markets or sharing his knowledge as a passionate teacher.",
    images: ["/assets/Sid 3.png"],
    name: "SIDDHARTH SHANKAR",
    role: "CTO & Technical Head",
    bannerimage: "/assets/Siddharth-small.png",
  },
  {
    id: 3,
    title: "Has biked more trails than scrolled design references ",
    tags: [
      "UI/UX Design",
      "Branding & Strategy",
      "Digital Marketing",
      "Biking & Travel",
    ],
    description:
      "Visionary by nature and meticulous by habit, Rohan is the creative force shaping digital experiences at Third Eye Creative. Skilled in UI/UX design, branding, and digital strategy, he brings ideas to life with precision, flair, and a keen eye for detail. From crafting intuitive interfaces to designing compelling visual narratives, he thrives on solving complex problems while keeping aesthetics at the forefront. Outside of work, he channels his curiosity into biking, traveling, photography, and sports. Strategic thinker. Creative powerhouse. Always designing the future.",
    images: ["/assets/Rohan.webp"],
    name: "Rohan Khanra",
    role: "Product Designer",
    bannerimage: "/assets/Rohan-small.png",
  },
  {
    id: 4,
    title: "Writes apps with flair, watches anime with passion.",
    tags: [
      "Full Stack",
      "MERN & Python",
      "Flutter",
      "Mobile & Web",
      "Traveler",
    ],
    description:
      "Yashavantha is a skilled full stack developer with 2 years of experience in building mobile applications and websites. Proficient in the MERN stack, Python, and Flutter. Outside of coding, Yashavantha enjoys watching anime, with favorites like Demon Slayer and One Piece, and loves to explore new places through travel.",
    images: ["/assets/Yashvantha.webp"],
    name: "Yashavantha Naik",
    role: "Full Stack Developer",
    bannerimage: "/assets/Yashvantha-small.png",
  },
  {
    id: 5,
    title: "Writes backend code faster than he hits a cricket ball.",
    tags: ["Backend Dev", "Flutter & FastAPI", "Databases", "Cricket & Travel"],
    description:
      "Arpit is a passionate backend developer with over 1 year of experience, contributing to robust and scalable systems at Third Eye Creative. Skilled in Flutter, FastAPI, Next.js, Flask, and Golang, and has a strong command over databases like MySQL and MongoDB. A natural problem-solver, Arpit enjoys tackling complex backend challenges and continuously learning new technologies. Outside of work, he loves playing cricket & exploring new places through travel. His curiosity, enthusiasm and versatility make him a valuable and forward-thinking member of the Third Eye team.",
    images: ["/assets/Ankit.webp"],
    name: "Arpit Kesharwani",
    role: "Backend Developer",
    bannerimage: "/assets/Ankit-small.png",
  },
  {
    id: 6,
    title:
      "Full-stack Kakashi: silent, skilled, and already three steps ahead.",
    tags: [
      "Full Stack",
      "MERN & Flutter",
      "UI & Backend",
      "Night Coder",
      "Strategist & Creator",
    ],
    description:
      "Afsar is a full-stack developer at Third Eye, equally at home crafting slick interfaces and building rock-solid backend systems. With two years of experience across the MERN stack and Flutter, he thrives in late-night coding sessions — headphones on, music loud, mind in flow. Calm by nature but electric when solving exciting challenges, he brings the balance of a strategist and a creator. Inspired by characters like Kakashi, he codes with quiet precision and unwavering focus, always learning, always evolving.",
    images: ["/assets/Afsar.webp"],
    name: "Afsar MD",
    role: "Integration Engineer",
    bannerimage: "/assets/Afsar-small.png",
  },
  {
    id: 7,
    title: "Runs on Python, caffeine, and progressive overload.",
    tags: ["Full Stack", "Python & Java", "Flutter & DevOps", "Gym & Graffiti"],
    description:
      "Calm in presence but electrifying in execution, Aalishan is the force behind many of our most reliable builds at Third Eye Creative. Skilled in Python, Java, Flutter, and more, he seamlessly switches between development, DevOps, and server management without breaking stride.He thrives in all-night coding marathons, where most people run out of energy — he finds momentum. Outside the screen glow, he’s either deadlifting at the gym or experimenting with graffiti lettering, turning raw ideas into bold visuals.Steady mind. Relentless output. Built different.",
    images: ["/assets/Aalishan.webp"],
    name: "Aalishan Khan",
    role: "Full Stack Developer",
    bannerimage: "/assets/Aalishan-small.png",
  },
  {
    id: 8,
    title: "Late-night coder with a guitar-shaped grimoire.",
    tags: [
      "Full Stack",
      "Python & Flutter",
      "TypeScript & AI",
      "Guitar & Gaming",
    ],
    description:
      "Ashwin is a Full Stack Developer at Third Eye Creative, working across Python, Flutter, TypeScript, and AI-driven tech. A calm coder by nature, he builds efficient, user-focused software with the precision of a strategist and the flair of an artist. When he’s not crafting code, he’s riffing metal on his guitar or diving into worlds like Ghost of Tsushima and Attack on Titan. Late nights, lo-fi vibes, and grimoire-grade problem-solving — that’s his workflow.",
    images: ["/assets/Ashwin.webp"],
    name: "Ashwin Venkataraman",
    role: "Full Stack Developer",
    bannerimage: "/assets/Ashwin-small.png",
  },
  {
    id: 9,
    title: "Thinks in exploits, responds in payloads ",
    tags: [
      "Ethical Hacking",
      "Penetration Testing",
      "Offensive Security",
      "Vulnerability Assessment",
      "Kali Linux Toolkit",
    ],
    description:
      "Adheem is a calm, offence-focused cybersecurity analyst with ~4 years of hands-on experience in ethical hacking and Penetration testing. Working from a Kali VM toolkit (Nmap, Metasploit, Wireshark, OpenVAS, Aircrack-ng, and more), he specializes in recon, vulnerability assessments, and exploit testing to harden web apps and client systems. Driven by the belief that “nothing is uncrackable,” he hunts for discrepancies and hidden openings—helps teams close them—while keeping one eye on emerging tech and the other on a green-on-black terminal.",
    images: ["/assets/Adheem 2.webp"],
    name: "Adheem Rahman",
    role: "Cybersecurity Engineer",
    bannerimage: "/assets/Adheem 2.png",
  },
  {
    id: 10,
    title: "Silence Coder: Chai Fueled, Asta Energy in Human Form",
    tags: [
      "Frontend Dev",
      "React & Next.js",
      "Speed Coder",
      "Early-Morning Flow",
      "AI/ML Explorer",
    ],
    description:
      "Abhinaba is a frontend MERN developer specializing in React and Next.js, writing clean and efficient code with speed as his superpower. A calm early-morning coder and proud chai loyalist, he stays focused in silence — no distractions, just flow. Inspired by anime characters like Asta from Black Clover, he brings determination and grit to every build. Currently diving into AI/ML, he believes in building the future, one line at a time.",
    images: ["/assets/Abhinaba.webp"],
    name: "Abhinaba Jana",
    role: "Integration Engineer",
    bannerimage: "/assets/Abhinaba-small.png",
  },
];

interface BannerImage {
  id: number;
  bannerImage: string;
}

function CreativeTeamIntro() {
  const [bannerimages, setBannerImages] = React.useState<BannerImage[]>([]);
  const [active, setActive] = React.useState<number>(1);
  const [isTablate, setIsTablate] = React.useState<true | false>(false);
  const [direction, setDirection] = React.useState<number>(1);

  const teamMember = teamDatas.find((project) => project.id === active)!;

  // ✅ track window size safely
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  React.useEffect(() => {
    const MOBILE_BREAKPOINT = { width: 1024, height: 1366 };

    const check = () => {
      setIsTablate(
        window.innerWidth <= MOBILE_BREAKPOINT.width &&
          window.innerHeight <= MOBILE_BREAKPOINT.height
      );
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  // ✅ better direction detection (circular)
  const handleSelect = (newId: number) => {
    if (newId === active) return;

    const prevActive = active;
    const prevIndex = teamDatas.findIndex((m) => m.id === prevActive);
    const newIndex = teamDatas.findIndex((m) => m.id === newId);
    const length = teamDatas.length;

    const forwardDiff = (newIndex - prevIndex + length) % length;
    const backwardDiff = (prevIndex - newIndex + length) % length;

    let newDirection = 1;
    if (forwardDiff === 0) {
      return;
    } else if (forwardDiff <= backwardDiff) {
      newDirection = 1;
    } else {
      newDirection = -1;
    }

    setDirection(newDirection);
    setActive(newId);
  };

  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const updateConstraints = () => {
      if (containerRef.current && innerRef.current) {
        const containerWidth = (containerRef.current as HTMLElement)
          .offsetWidth;
        const innerWidth = (innerRef.current as HTMLElement).scrollWidth;

        // Calculate how much we can drag to the left
        const maxDrag = containerWidth - innerWidth;

        setConstraints({ left: maxDrag, right: 0 });
      }
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  React.useEffect(() => {
    const images: { id: number; bannerImage: string }[] = teamDatas.map(
      (item) => ({
        id: item.id,
        bannerImage: item.bannerimage,
      })
    );
    setBannerImages(images);
  }, []);

  useEffect(() => {
    const clipBox = document.getElementById("clipBox");

    if (clipBox) {
      const bottomMask = document.createElement("div");
      bottomMask.style.position = "absolute";
      bottomMask.style.bottom = "-62px";
      bottomMask.style.left = "0";
      bottomMask.style.width = "120%";
      bottomMask.style.height = "60px"; // how much to hide
      bottomMask.style.background = "#000000"; // match bg
      bottomMask.style.opacity = "0.3";

      clipBox.appendChild(bottomMask);
    }
  }, []);

  return (
    <div className="creative-team-intro-wrapper relative z-1 overflow-hidden">
      <div className="text-wraper-in-creative-team relative z-1">
        <h3 className="creative-team-intro-title">
          Minds Built to <span>Create</span>
        </h3>
        <div className="text-section-in-creative-team">
          <p>
            Meet the thinkers, makers, & <br />
            dreamers of Third Eye
          </p>
          <p>
            A team engineered with Precision,
            <br /> Passion, & Skill
          </p>
          <p>
            Together, we transform Ideas into <br />
            Realities
          </p>
        </div>
      </div>

      {/* Top banner images clickable */}
      <div className="creative-team-image-wrapper relative z-1">
        <motion.div
          className="horizontal-scroller-container-testimonial-showcase cursor-grab overflow-hidden "
          whileTap={{ cursor: "grabbing" }}
          ref={containerRef}
        >
          <motion.div
            drag="x"
            dragConstraints={constraints}
            className="flex  px-2"
            ref={innerRef}
          >
            {bannerimages.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelect(item.id)}
                className={`flex items-center justify-center p-2 px-3 rounded-md shadow hover:shadow-lg transition-shadow duration-300 hover:scale-105`}
              >
                <div
                  className={`brand-logo hover-fill-transition w-full flex justify-center creative-team-image ${
                    teamDatas[index].id === teamMember.id
                      ? "active-team-member-border"
                      : ""
                  }`}
                >
                  {/*
                    ---------------------------------
                    THIS IS THE CHANGED SECTION
                    ---------------------------------
                  */}
                  <Image
                    src={item.bannerImage}
                    alt="image"
                    width={100}
                    height={100}
                    className={`teem-members-icon-clickble transition-all duration-300 ${
                      item.id !== active ? "grayscale" : ""
                    } ${index === 8 && "scale-105" }`}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Main section */}
      <div className="relative max-w-[1300px] w-full mx-auto">
        {/* <div
          style={{
            width: "100%",
            height: "600px",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        >
          <DarkVeil  speed={0.8}/>
        </div> */}
        <div className=" text-white max-w-[1279px] w-full mx-auto mb-[8.75rem] md:px-6 lg:px-0 creative-team-info-wrapper-and-holder relative">
          <div className="flex flex-col-reverse lg:flex-row gap-4 md:gap-6 lg:gap-[10%] items-start">
            {/* Left: Text Content */}
            <div className="lg:w-[40%] w-full space-y-6">
              <h2 className="text-3xl font-semibold leading-snug main-heading-tet-in-creative-team relative z-1">
                {teamMember.title}
              </h2>

              {/* Tags */}
              <div className="flex flex-wrap gap-3">
                {teamMember.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/10 border-2 border-[#FF891D] text-sm rounded-full text-white creative-team-tags"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed creative-team-description relative z-1">
                {teamMember.description}
              </p>
            </div>

            {/* Background images (visible across breakpoints) */}

            {/* Right: Image Stack with 3-Layer PvP Animation */}
            <div className="relative lg:w-[55%] w-full h-[500px] lg:h-[550px] flex items-cente1r justify-center " id="clipBox">
              {/* <img
                src="/assets/Pink background blurred.png"
                alt="background-image"
                className="bg-image"
              />
              <Image
                width={785}
                height={499}
                src="/assets/background in creative team info.png"
                alt="background-image"
                className="bg-image-foreground"
              /> */}
              <PlexusBackground />

              <AnimatePresence initial={false} mode="popLayout">
                {teamDatas.map((member, idx) => {
                  const activeIndex = teamDatas.findIndex(
                    (m) => m.id === active
                  );
                  const positionIndex =
                    (idx - activeIndex + teamDatas.length) % teamDatas.length;

                  let styles = {
                    zIndex: 0,
                    opacity: 0,
                    scale: 0.8,
                    x: 0,
                  };

                  const initialvalue =
                    positionIndex === 0
                      ? {
                          x: direction === 1 ? 300 : -300,
                          opacity: 0,
                          scale: 1.1,
                        }
                      : { opacity: 0 };

                  const exitValue =
                    positionIndex === 0
                      ? {
                          x: direction === 1 ? -300 : 300,
                          opacity: 0,
                          scale: 0.9,
                        }
                      : { opacity: 0 };

                  if (isMobile) {
                    // Mobile → only show active member
                    if (positionIndex === 0) {
                      styles = { zIndex: 3, opacity: 1, scale: 1, x: 0 };
                    } else {
                      return null;
                    }
                  } else if (isTablate) {
                    // Tablet → show 2 stacked (active, next)
                    if (positionIndex === 0) {
                      styles = { zIndex: 3, opacity: 1, scale: 1, x: -80 };
                    } else if (positionIndex === 1) {
                      styles = { zIndex: 2, opacity: 0.8, scale: 0.9, x: 60 };
                    } else {
                      return null;
                    }
                  } else {
                    // Desktop / tablet → show 3 stacked in FORWARD order (active, next, next-next)
                    if (positionIndex === 0) {
                      // Active (center/highlight)
                      styles = { zIndex: 3, opacity: 1, scale: 1, x: -150 };
                    } else if (positionIndex === 1) {
                      // 2nd in array (next on the right)
                      styles = { zIndex: 2, opacity: 0.8, scale: 0.9, x: -20 };
                    } else if (positionIndex === 2) {
                      // 3rd in array (next-next; place on the left/back)
                      styles = { zIndex: 1, opacity: 0.3, scale: 0.88, x: 80 };
                    } else {
                      // Hide the rest
                      return null;
                    }
                  }

                  return (
                    <motion.div
                      key={member.id + "-" + member.images[0]}
                      className="absolute flex items-center justify-center"
                      
                      animate={styles}
                      initial={initialvalue}
                      exit={exitValue}
                      transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src={member.images[0]}
                        alt={member.name}
                        width={360}
                        height={550}
                        className={`rounded-xl transition-all duration-700 ${
                          positionIndex === 0 ? "scale-100" : "scale-90"
                        } `}
                      />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              {/* Name Card for Active Member */}
              <div className="absolute bottom-0 right-0 left-0 z-40">
                <div className="relative rounded-xl p-[2px] overflow-hidden">
                  {/* Glow Layer */}
                  <div className="glow-layer" />

                  {/* Inner Card */}
                  <div className="relative bg-black px-6 py-6 pt-8 rounded-xl flex flex-col items-start w-full overflow-hidden">
                    <div className="card-top-bar" />

                    <h3 className="text-lg font-bold text-purple-200 z-10 creative-team-name">
                      {teamMember?.name}
                    </h3>
                    <p className="text-sm text-gray-300 z-10 creative-team-role">
                      {teamMember?.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreativeTeamIntro;
