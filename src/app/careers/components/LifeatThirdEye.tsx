"use client";

import ScrollReveal from "./ScrollReveal";

const values = [
  {
    id: "01",
    title: "Breaking the Mold, by Design",
    desc: "Innovation thrives when you color outside the lines.",
  },
  {
    id: "02",
    title: "Built for the Unconventional Thinker",
    desc: "A space where bold ideas take shape.",
  },
  {
    id: "03",
    title: "Balance that Works for Life",
    desc: "Hybrid culture that supports your creativity and well-being.",
  },
  {
    id: "04",
    title: "Embrace Every Challenge, and Then Some",
    desc: "We stretch expectations into something extraordinary.",
  },
  {
    id: "05",
    title: "Powered by Diverse Perspectives",
    desc: "Different voices, richer ideas, stronger solutions.",
  },
];

function LifeatThirdEye() {
  return (
    <div className="lifeat-third-eye-wrapper">
      <h3 className="lifeat-third-eye-title">
        <span>Life at</span> Third Eye
      </h3>
      <p className="lifeat-third-eye-desc">
        A culture of curiosity, collaboration & work 
      </p>

      <div className="bg-black text-white py-0 pt-[5rem] px-4 md:px-10 max-w-[1262px] mx-auto mb-[3.75rem] lifeatthird-eye-values-wrapper md:mb-[4.75rem] lg:mb-[0.75rem]">
        {values.map((item, idx) => (
          <div key={idx} className="">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 justify-stretch">
              <div className="w-50 shrink-0 py-6 pb-2 md:pb-6">
                <ScrollReveal
                  baseOpacity={0}
                  enableBlur={true}
                  baseRotation={5}
                  blurStrength={10}
                  textClassName="mt-[3.188rem] text-like-id-main-wrapper"
                >
                  <span className="text-like-id-wrapper">
                    {item.id}
                  </span>
                </ScrollReveal>
              </div>
              <div className="flex-1">
                <div className="py-6 w-full">
                  <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    textClassName="text-xl md:text-2xl font-semibold mb-2 text-like-header-wrapper mt-[3.188rem] w-full"
                  >
                    {item.title}
                  </ScrollReveal>
                  <ScrollReveal
                    baseOpacity={0}
                    enableBlur={true}
                    baseRotation={5}
                    blurStrength={10}
                    textClassName="text-sm md:text-base text-white/70 text-like-paragraph-wrapper mb-[3.188rem] w-stretch"
                  >
                    {item.desc}
                  </ScrollReveal>
                </div>
                <hr
                  className={`w-full h-[1px] bg-[#3F3F3F] opacity-20 ${
                    idx === values.length - 1 ? "hidden" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LifeatThirdEye;
