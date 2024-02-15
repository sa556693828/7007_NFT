import React from "react";
import title from "@/assets/7007_title.svg";
import title_W from "@/assets/7007_title_W.svg";
import Image from "next/image";
import LaunchButton from "../Button/LaunchButton";

interface Props {
  content: string;
  darkMode: boolean;
}

export default function LandingMobile({ content, darkMode }: Props) {
  return (
    <div className="relative z-20 flex h-[100dvh] flex-col items-center overflow-hidden bg-bgWhite transition-all lg:hidden dark:bg-black">
      <div className="absolute top-[27%] flex w-full flex-col items-center gap-6">
        {darkMode ? (
          <Image src={title.src} alt="title" width={246} height={51} />
        ) : (
          <Image src={title_W.src} alt="title" width={246} height={51} />
        )}
        <div className="flex flex-col gap-6">
          <a className="max-w-[248px] whitespace-pre text-xs font-normal leading-[150%]">
            {content}
          </a>
          <LaunchButton title="launch app" classname="w-fit" />
        </div>
      </div>
    </div>
  );
}
