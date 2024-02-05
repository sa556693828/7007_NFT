import React from "react";
import title from "@/assets/7007_title.svg";
import Image from "next/image";
import LaunchButton from "../Button/LaunchButton";

interface Props {
  content: string;
}

export default function LandingMobile({ content }: Props) {
  return (
    <div className="relative z-20 flex h-[100dvh] flex-col items-center overflow-hidden transition-all lg:hidden">
      <div className="absolute top-[27%] flex w-full flex-col items-center gap-6">
        <Image src={title.src} alt="title" width={246} height={51} />
        <div className="flex flex-col gap-6">
          <a className="max-w-[248px] whitespace-pre text-xs font-normal leading-[150%]">
            {content}
          </a>
          <LaunchButton title="launch app" />
        </div>
      </div>
    </div>
  );
}
