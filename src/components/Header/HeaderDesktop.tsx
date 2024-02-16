import React, { useContext, useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import logo from "@/assets/Header/7007.png";
import logo_W from "@/assets/Header/7007_W.svg";
import tg from "@/assets/Header/telegram.svg";
import tgH from "@/assets/Header/tgHover.svg";
import x from "@/assets/Header/x.svg";
import xH from "@/assets/Header/xHover.svg";
import { menuList } from "@/constants/menuList";
import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NFTContext } from "../Provider";

interface Props {
  urlPath: string;
  darkMode: boolean;
}

export default function Desktop({ urlPath, darkMode }: Props) {
  const [hoverTG, setHoverTG] = useState(false);
  const [hoverX, setHoverX] = useState(false);
  return (
    <>
      <BsChevronLeft
        size="22px"
        className="fixed left-[60px] top-[60px] z-50 hidden rotate-45 lg:flex"
        color={"white"}
      />
      <div
        className="fixed right-[60px] top-[60px] z-50 hidden flex-col items-end justify-between lg:flex"
        style={{
          height: "calc(100% - 160px)",
        }}
      >
        {/* {darkMode ? (
          <Image src={logo.src} alt="title" width={45} height={89} />
        ) : (
          <Image src={logo_W.src} alt="title" width={45} height={89} />
        )} */}
        <Image src={logo.src} alt="title" width={45} height={89} />

        <div className="flex flex-col gap-[30px] text-right">
          {menuList.map((menu) => (
            <a className="font-bold" key={menu.name}>
              {menu.name}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-[18px] text-right">
          <div
            className={`flex h-[45px] w-[45px] items-center justify-center rounded-full border pt-[2px] ${hoverTG ? "border-buttonGr shadow-buttonG " : "border-white"} bg-black transition-all`}
            onMouseEnter={() => setHoverTG(true)}
            onMouseLeave={() => setHoverTG(false)}
          >
            <FaTelegramPlane size={23} color={hoverTG ? "#B4FF78" : "white"} />
          </div>
          <div
            className={`flex h-[45px] w-[45px] items-center justify-center rounded-full ${hoverX ? "bg-buttonGr shadow-buttonG" : "border border-white bg-white"} transition-all`}
            onMouseEnter={() => setHoverX(true)}
            onMouseLeave={() => setHoverX(false)}
          >
            <FaXTwitter size={25} color="black" />
          </div>
        </div>
      </div>
    </>
  );
}
