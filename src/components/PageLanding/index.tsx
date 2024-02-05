import React from "react";
import LandingDesktop from "./LandingDesktop";
import LandingMobile from "./LandingMobile";
import landing from "@/assets/landing.svg";
import landingM from "@/assets/M_landing.svg";

export default function Landing() {
  const text = `Revolutionizing AI\nwith transparent,\non-chain model publishing\nand creator compensation.`;

  return (
    <div className="relative overflow-hidden">
      <LandingDesktop content={text} />
      <LandingMobile content={text} />
      <img
        src={landing.src}
        alt="landing"
        className="absolute left-0 z-0 hidden w-full md:-bottom-10 md:block lg:-bottom-20"
      />
      <img
        src={landingM.src}
        alt="landingM"
        className="absolute -bottom-36 left-0 z-0 block h-3/5 scale-100 object-cover md:hidden"
      />
    </div>
  );
}
