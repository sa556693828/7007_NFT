import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import Image from "next/image";
import LaunchButton from "../Button/LaunchButton";
import black from "@/assets/PageAsset/black.svg";
import color from "@/assets/PageAsset/color.svg";
// import color from "@/assets/PageAsset/color.png";

export default function Asset() {
  const title = `New asset\nclass : AI Models`;

  return (
    <>
      <div className="z-20 flex h-fit min-h-screen w-full flex-col items-start pl-[14%] pt-[200px] text-white">
        <div className="relative max-w-[781px] items-start whitespace-pre-wrap">
          <a className="text-[45px] font-bold leading-none lg:text-[60px]">
            {title}
          </a>
          <LaunchButton classname="absolute right-0 top-0" title="CONTACT US" />
        </div>

        <div className="relative mt-[50px] w-full">
          <Image
            src={color}
            width={647}
            height={285}
            alt="colorPart"
            className="img absolute left-0 top-0 object-contain"
          />
          <Image
            src={black}
            width={707}
            height={165}
            alt="blackPart"
            className="absolute left-0 top-[61px]"
          />
        </div>
      </div>
    </>
  );
}
