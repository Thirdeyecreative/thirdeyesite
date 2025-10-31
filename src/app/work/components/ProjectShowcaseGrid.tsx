"use client";

import React, { useState } from "react";
// import CategoryFilterBar from "./CategoryFilterBar";
import Image from "next/image";
import Link from "next/link";
import Router from "next/router";

interface Project {
  id: number;
  image: string;
  categories: string[];
  title: string;
  flag: string;
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: "/assets/Artboard 3.jpg",
    categories: ["IOT", "Diagnostics", "Data Logging"],
    title: "Mesha IoT — Real-Time EV Battery Insights",
    flag: "project",

    description:
      "A scalable cloud-based platform that captures live voltage, current, temperature, and location data from thousands of EV autos across India — transforming raw telemetry into actionable diagnostics for faster issue resolution.",
  },
  {
    id: 2,
    image: "/assets/xplorean-13.jpg",
    categories: ["AI", "Travel", "Assistant"],
    title: "Xplorion AI — Travel, Reimagined",
    flag: "project",

    description:
      "For Xplorion AI, we crafted a smart itinerary mobile app that blends AI-driven personalization with intuitive UX, turning travel planning into an effortless, tailored experience.",
  },
  {
    id: 3,
    image: "/assets/step-gha-2.jpg",

    categories: ["IOT", "Diagnostics", "Data Logging"],
    title: "STEP — The Smarter Way to Prep",
    flag: "project",

    description:
      "A NEET PG prep app designed for serious med aspirants on the go. We built a structured, distraction-free interface for focus and performance.",
  },
  // {
  //   id: 8,
  //   image: "/assets/project3.png",

  //   categories: ["Real Estate Website", "UI/UX Design", "Web Development"],
  //   title: "Urbando — Artfully Engineered Living",
  //   flag: "project",
  //   description:
  //     " A sleek, responsive website designed to showcase Urbando’s premium homes with elegance and ease. We blended visual minimalism with high-conversion layouts for a refined user experience.",
  // },
  {
    id: 4,
    image: "/assets/shellindia-gallery-image-2.jpg",
    categories: ["Finops", "Reporting", "Reconciliation"],
    title: "Shell India – Digital Payment Command Center",
    flag: "project",

    description:
      "A secure and scalable web platform built to centralize digital transactions across fuel retail sites. Designed for reliability and real-time visibility, it streamlines payment operations with precision and control.",
  },
  {
    id: 6,
    image: "/assets/project6.png",
    categories: ["Finops", "Reporting", "Reconciliation"],
    title: "Shell Retail Cloud — Unified Digital Payments Interface",
    flag: "project",

    description:
      "A robust, web-based dashboard enabling retailers and HQ to track, reconcile, and manage all digital payment activity with absolute clarity and speed.",
  },
  {
    id: 7,
    image: "/assets/Naren-IOT-17.jpg",
    categories: ["Agritech", "IoT", "Operation"],
    title: "Naren IoT — Connected Control, Anytime Anywhere",
    flag: "project",

    description:
      "A unified IoT dashboard built to monitor, manage, and automate industrial devices in real-time. Designed for reliability, remote accessibility, and data-backed decision-making.",
  },
  {
    id: 5,
    image: "/assets/mesha-2-22.jpg",
    categories: ["IOT", "Diagnostics", "Data Logging"],
    title: "Mesha Data Manager — Real-Time UPS Insights",
    flag: "project",
    description:
      "The Mesha app turns UPS servicing into a connected workflow — Bluetooth data collection on-site, cloud analytics off-site. Engineers now diagnose issues in seconds instead of hours.",
  },
];

function ProjectShowcaseGrid() {
  const [active] = useState("");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div>
      {/* <CategoryFilterBar active={active} setActive={setActive} /> */}
      <div className="max-w-[1232px] mx-auto px-4 py-10 grid gap-10 gap-y-15 md:grid-cols-2 mb-[8.75rem] pt-0 pb-0">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="space-y-4 group">
              <Link
                href={`/work/${project.id}`}
                className="relative block overflow-hidden"
              >
                {/* Image with hover effect */}
                <div
                  className="relative"
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    setCursorPos({
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top,
                    });
                    setHoveredId(project.id);
                  }}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={609}
                    height={454}
                    className="object-cover rounded-lg image-box-project-showcase-grid w-full h-auto"
                  />

                  {/* Tracker Button - Only visible when hovering over image */}
                  {hoveredId === project.id &&
                    (project.flag === "project" ? (
                      <div
                        className="absolute pointer-events-none transition-transform duration-100 whitespace-nowrap"
                        style={{
                          top: cursorPos.y,
                          left: cursorPos.x,
                          transform: "translate(-50%, -50%)",
                        }}
                        onClick={() => Router.push(`/work/${project.id}`)}
                      >
                        <div className="flex  work-section-button-work-and-project  items-center gap-2 text-xs font-semibold text-white from-[#C883FF] to-[#772BF2] via-[#CE0AFF] bg-gradient-to-r px-3 py-1 rounded-full shadow-lg">
                          View Project
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 32 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                             transform="rotate(-30)" 
                          >
                            <path
                              d="M1.92336 15.9677C2.0543 15.989 2.1868 15.9988 2.31939 15.9971L24.8948 15.9971L24.4025 16.226C23.9213 16.4538 23.4836 16.7637 23.1089 17.1418L16.7782 23.4725C15.9444 24.2685 15.8043 25.5488 16.4462 26.5062C17.1932 27.5265 18.6259 27.748 19.6462 27.0009C19.7286 26.9406 19.8069 26.8747 19.8806 26.8039L31.3285 15.356C32.2231 14.4623 32.2239 13.0127 31.3303 12.118C31.3297 12.1174 31.3291 12.1168 31.3285 12.1162L19.8806 0.668288C18.9852 -0.224578 17.5355 -0.222577 16.6426 0.672795C16.5723 0.74327 16.5067 0.818253 16.4462 0.897244C15.8043 1.85465 15.9444 3.13503 16.7782 3.93094L23.0974 10.2731C23.4334 10.6094 23.8196 10.8914 24.2422 11.1088L24.9291 11.4179L2.44538 11.4179C1.27576 11.3745 0.249601 12.1915 0.0298722 13.3411C-0.172541 14.5893 0.675178 15.7652 1.92336 15.9677Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div
                        className="absolute pointer-events-none transition-transform duration-100 whitespace-nowrap"
                        style={{
                          top: cursorPos.y,
                          left: cursorPos.x,
                          transform: "translate(-50%, -50%)",
                        }}
                        onClick={() => Router.push(`/work/${project.id}`)}
                      >
                        <div className="flex work-section-button-work-and-project  items-center gap-1 text-xs font-semibold text-white from-[#C883FF] to-[#772BF2] via-[#CE0AFF] bg-gradient-to-r px-3 py-1 rounded-full shadow-lg">
                          View Website
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>
                    ))}
                </div>
              </Link>

              {/* Project details below the image */}
              <div className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {project.categories.map((cat, i) => (
                    <span
                      key={`single-${i}`}
                      className="
                text-xs font-medium text-white
                px-4 py-1 rounded-full 
                border-2 border-transparent  /* 1. Set a transparent border of the desired thickness */

                /* 2. Define two backgrounds: solid black first, then the gradient */
                bg-[linear-gradient(black,black),linear-gradient(90deg,#C883FF,#772BF2,#CE0AFF)]

                bg-origin-border          /* 3. Make sure backgrounds originate from the border edge */

                /* 4. Clip the first background (black) to the padding-box, and the second (gradient) to the border-box */
                [background-clip:padding-box,border-box]
              "
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white leading-snug project-showcase-title">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="project-showcase-description">
                  {project.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-2 text-center text-white text-lg font-medium py-20">
            No projects available for &quot;
            <span className="text-[#FF891D]">{active}</span>&quot;
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectShowcaseGrid;
