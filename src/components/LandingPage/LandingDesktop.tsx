import React from "react";
import title from "@/assets/7007_title.svg";

import arrow from "@/assets/button_arrow.png";
import Image from "next/image";

interface Props {
  content: string;
}

export default function LandingDesktop({ content }: Props) {
  return (
    <div className="hidden flex-col gap-[50px] pt-[250px] w-full items-center pr-44 lg:flex z-20">
      <Image src={title.src} alt="title" width={576} height={128} />
      <div className="flex flex-row gap-6 justify-between items-end">
        <a className="max-w-lg whitespace-pre font-normal leading-6">
          {content}
        </a>
        <button className="flex items-center gap-[6px] bg-white text-black h-[22px] px-2">
          <a className="text-lg leading-6">launch app</a>
          <Image src={arrow.src} alt="title" width={21} height={21} />
        </button>
      </div>
    </div>
  );
}
