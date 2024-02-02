import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import logo from "@/assets/7007.png";
import tg from "@/assets/telegram.svg";
import x from "@/assets/x.svg";
import { menuList } from "@/constants/menuList";
import { FaCircleArrowRight } from "react-icons/fa6";
import Image from "next/image";

interface Props {
  urlPath: string;
}

export default function Desktop({ urlPath }: Props) {
  return (
    <>
      <BsChevronLeft
        size="22px"
        className="rotate-45 lg:flex fixed hidden z-50 top-[60px] left-[60px]"
      />
      <div
        className="flex-col justify-between items-end lg:flex fixed hidden top-[60px] right-[60px] z-50"
        style={{
          height: "calc(100% - 160px)",
        }}
      >
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
    </>
  );
}
