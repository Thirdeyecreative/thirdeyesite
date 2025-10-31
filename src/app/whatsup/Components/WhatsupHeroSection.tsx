import React from "react";
import Aurora from "../../../../Reactbits/Aurora/Aurora";

function WhatsupHeroSection() {
  return (
    <div className="relative h-full about-us-hero-section about-us-page-hero whatsup-journey-section">
      {/* <Image
                src="/assets/Glass effect for hero section.svg"
                alt="Logo"
                width={"100"}
                height={"100"}
                className="mx-auto my-4 background-image-hero-section-about-us"
              /> */}
      <div className="about-us-hero-section-wrapper h-full overflow-hidden">
        <h1 className="about-us-hero-section-title whatsup-hero-section-title">BEYOND <span>WORK</span></h1>
        <h3 className="about-us-hero-section-title whatsup-hero-section-title-2">INTO PLAY</h3>
        <div className="relative w-full ">
          <Aurora
            colorStops={["#C883FF", "#772BF2", "#CE0AFF00"]}
            blend={0.1}
            amplitude={1.0}
            speed={1}
            mobileHeight={300}
          />
          <div className="about-us-hero-section-content-wrapper-inner ">
            <div className=" about-us-hero-section-content-wrapper whatsup-hero-section">
              <h4 className="in-whatsup-section">
                Where Creativity Fuels not just Ideas,<br /> but
                <span className="span-diffrent-color-2"> Experiences</span>
              </h4>
              <div className="about-us-hero-section-footer-wrapper">
                {/* <p>TEAM SPIRITz</p> */}
                <p>CREATIVE ENERGY</p>
                <p>UNPLUGGED MOMENTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatsupHeroSection;
