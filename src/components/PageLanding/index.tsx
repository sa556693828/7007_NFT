import React, { useContext } from "react";
import LandingDesktop from "./LandingDesktop";
import LandingMobile from "./LandingMobile";
import landing from "@/assets/landing.svg";
import landingM from "@/assets/M_landing.svg";
import { NFTContext } from "../Provider";

export default function Landing() {
  const { darkMode, toggleDarkMode } = useContext(NFTContext);

  const text = `Revolutionizing AI\nwith transparent,\non-chain model publishing\nand creator compensation.`;

  return (
    <div className="relative overflow-hidden">
      <LandingDesktop content={text} darkMode={darkMode} />
      <LandingMobile content={text} darkMode={darkMode} />
      <img
        src={landing.src}
        alt="landing"
        className="absolute left-0 z-0 hidden w-full md:-bottom-10 md:block lg:-bottom-20"
      />
      <img
        src={landingM.src}
        alt="landingM"
        className="absolute -bottom-36 left-0 z-20 block h-3/5 scale-100 object-cover md:hidden"
      />
    </div>
  );
}
