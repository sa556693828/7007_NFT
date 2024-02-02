import React from "react";
import title from "@/assets/7007_title.svg";
import logo from "@/assets/7007.png";
import tg from "@/assets/telegram.svg";
import x from "@/assets/x.svg";
import arrow from "@/assets/button_arrow.png";
import Image from "next/image";
import { BsChevronLeft } from "react-icons/bs";
import { menuList } from "@/constants/menuList";
import { FaCircleArrowRight } from "react-icons/fa6";

interface Props {
  content: string;
}

export default function LandingDesktop({ content }: Props) {
  return (
    <div className="pt-[60px] px-[60px] pb-[100px] flex-row items-start justify-between h-[100dvh] relative overflow-hidden hidden lg:flex z-20">
      <BsChevronLeft size="22px" className="rotate-45 flex" />
      <div className="flex flex-col gap-[50px] pt-48 w-auto">
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
      <div className="flex flex-col justify-between items-end h-full">
        <Image src={logo.src} alt="title" width={45} height={89} />
        <div className="flex flex-col text-right gap-[30px]">
          {menuList.map((menu) => (
            <a className="font-bold" key={menu.name}>
              {menu.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col text-right gap-[18px]">
          <Image src={tg.src} alt="discord" width={45} height={45} />
          <Image src={x.src} alt="discord" width={45} height={45} />
        </div>
      </div>
    </div>
  );
}
