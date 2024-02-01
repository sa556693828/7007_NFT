import React from "react";
import title from "@/assets/7007_title.png";
import studio from "@/assets/studio.png";
import logo from "@/assets/7007.png";
import discord from "@/assets/discord.png";
import landing from "@/assets/landing.svg";
import arrow from "@/assets/button_arrow.png";
import Image from "next/image";
import { BsChevronLeft } from "react-icons/bs";
import { menuList } from "@/constants/menuList";
import { FaCircleArrowRight } from "react-icons/fa6";

export default function Landing() {
  const text = `the next\ngeneration marketplace\nto secure and\ngovern AI models.`;
  return (
    <div className="pt-[60px] px-[60px] pb-[100px] flex justify-between h-screen relative overflow-hidden">
      <BsChevronLeft size="22px" className="rotate-45" />
      <div className="flex flex-col justify-center gap-[50px]">
        <div className="flex gap-8">
          <Image src={title.src} alt="title" width={576} height={128} />
          <Image src={studio.src} alt="title" width={17} height={125} />
        </div>
        <div className="flex gap-6 justify-between">
          <div className="max-w-lg whitespace-pre font-normal leading-6">
            {text}
          </div>
          <div className="flex justify-end items-end">
            <button className="flex items-center gap-[6px] bg-white text-black h-[21px] px-1">
              <a className="text-lg leading-6">SIGN UP</a>
              <Image src={arrow.src} alt="title" width={21} height={21} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between items-end h-full">
        <Image src={logo.src} alt="title" width={45} height={89} />
        <div className="flex flex-col text-right gap-[30px]">
          {menuList.map((menu) => (
            <a className="font-bold">{menu.name}</a>
          ))}
        </div>
        <div className="flex flex-col text-right gap-[18px]">
          <Image src={discord.src} alt="discord" width={45} height={45} />
          <FaCircleArrowRight size="45px" className="-rotate-45" />
        </div>
      </div>
      <img
        src={landing.src}
        alt="title"
        className="absolute -bottom-20 left-0 w-full"
      />
    </div>
  );
}
