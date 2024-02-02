import React from "react";
import LandingDesktop from "./LandingDesktop";
import LandingMobile from "./LandingMobile";
import landing from "@/assets/landing.svg";
import landingM from "@/assets/M_landing.svg";

export default function Landing() {
  const text = `Revolutionizing AI\nwith transparent,\non-chain model publishing\nand creator compensation.`;

  return (
    <>
      <LandingDesktop content={text} />
      <LandingMobile content={text} />
      <img
        src={landing.src}
        alt="landing"
        className="absolute md:-bottom-10 z-0 lg:-bottom-20 left-0 w-full hidden md:block"
      />
      <img
        src={landingM.src}
        alt="landingM"
        className="object-cover h-3/5 absolute -bottom-36 left-0 scale-100 block md:hidden z-0"
      />
    </>
  );
}
