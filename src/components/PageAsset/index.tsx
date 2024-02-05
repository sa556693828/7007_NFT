import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import landing from "@/assets/landing.svg";
import landingM from "@/assets/M_landing.svg";
import arrow from "@/assets/button_arrow.png";
import Image from "next/image";
import LaunchButton from "../Button/LaunchButton";

export default function Asset() {
  const title = `New asset\nclass : AI Models`;

  return (
    <>
      <div className="z-20 flex min-h-screen w-full flex-col items-start pl-[14%] pt-[200px] text-white">
        <div className="relative max-w-[781px] items-start whitespace-pre-wrap">
          <a className="text-[45px] font-bold leading-none lg:text-[60px]">
            {title}
          </a>
          <LaunchButton classname="absolute right-0 top-0" title="CONTACT US" />
        </div>
      </div>
    </>
  );
}
