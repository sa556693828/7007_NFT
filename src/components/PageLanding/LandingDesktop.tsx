import React from "react";
import title from "@/assets/7007_title.svg";
import Image from "next/image";
import LaunchButton from "../Button/LaunchButton";

interface Props {
  content: string;
}

export default function LandingDesktop({ content }: Props) {
  return (
    <div className="z-20 hidden min-h-[100dvh] w-full flex-col items-center gap-[50px] pr-44 pt-[250px] lg:flex">
      <Image src={title.src} alt="title" width={576} height={128} />
      <div className="flex flex-row items-end justify-between gap-6">
        <a className="max-w-lg whitespace-pre font-normal leading-6">
          {content}
        </a>
        <LaunchButton title="launch app" />
      </div>
    </div>
  );
}
