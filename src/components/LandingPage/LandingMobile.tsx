import React from "react";
import title from "@/assets/7007_title.svg";
import tg from "@/assets/telegram.svg";
import x from "@/assets/x.svg";
import arrow from "@/assets/button_arrow.png";
import Image from "next/image";

interface Props {
  content: string;
}

export default function LandingMobile({ content }: Props) {
  return (
    <div className="flex-col lg:hidden flex items-center h-[100dvh] relative overflow-hidden z-20">
      <div className="flex flex-col gap-6 w-2/3 absolute top-[27%]">
        <Image src={title.src} alt="title" width={576} height={128} />
        <div className="flex flex-col gap-6">
          <a className="max-w-[248px] whitespace-pre font-normal text-xs leading-[150%]">
            {content}
          </a>
          <button className="flex w-fit items-center gap-[6px] bg-white text-black h-[22px] px-2">
            <a className="text-lg leading-6">launch app</a>
            <Image src={arrow.src} alt="title" width={21} height={21} />
          </button>
        </div>
      </div>
      <div className="w-full flex justify-end absolute right-5 bottom-[50px] z-50">
        <div className="flex flex-col text-right gap-[18px] z-50">
          <Image src={tg.src} alt="discord" width={45} height={45} />
          <Image src={x.src} alt="discord" width={45} height={45} />
        </div>
      </div>
    </div>
  );
}
