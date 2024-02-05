import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import logo from "@/assets/Header/7007.png";
import tg from "@/assets/Header/telegram.svg";
import x from "@/assets/Header/x.svg";
import { menuList } from "@/constants/menuList";
import Image from "next/image";

interface Props {
  urlPath: string;
}

export default function Desktop({ urlPath }: Props) {
  return (
    <>
      <BsChevronLeft
        size="22px"
        className="fixed left-[60px] top-[60px] z-50 hidden rotate-45 lg:flex"
      />
      <div
        className="fixed right-[60px] top-[60px] z-50 hidden flex-col items-end justify-between lg:flex"
        style={{
          height: "calc(100% - 160px)",
        }}
      >
        <Image src={logo.src} alt="title" width={45} height={89} />
        <div className="flex flex-col gap-[30px] text-right">
          {menuList.map((menu) => (
            <a className="font-bold" key={menu.name}>
              {menu.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-[18px] text-right">
          <Image src={tg.src} alt="discord" width={45} height={45} />
          <Image src={x.src} alt="discord" width={45} height={45} />
        </div>
      </div>
    </>
  );
}
