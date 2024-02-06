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
  const mobileTitle = `New asset\nclass :\nAI Models`;

  return (
    <>
      <div className="z-20 flex h-fit min-h-[100dvh] w-full flex-col items-start pl-10 pt-[210px] text-white lg:pl-[14%] lg:pt-[200px]">
        <div className="relative flex max-w-[781px] items-start whitespace-pre-wrap">
          <a className="hidden text-[60px] font-bold leading-none lg:block">
            {title}
          </a>
          <a className="text-[36px] font-bold leading-none lg:hidden">
            {mobileTitle}
          </a>
          <LaunchButton
            classname="absolute right-0 top-0 hidden lg:flex"
            title="CONTACT US"
          />
        </div>
        <div className="relative mb-[60px] mt-[18px] flex w-full lg:hidden">
          <Image
            src={color}
            width={283}
            height={125}
            alt="colorPart"
            className="img"
          />
          <Image
            src={black}
            width={310}
            height={72}
            alt="blackPart"
            className="absolute left-0 top-[26.32px]"
          />
        </div>
        <LaunchButton classname="lg:hidden" title="CONTACT US" />
        <div className="relative mt-[50px] hidden w-full lg:flex">
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
