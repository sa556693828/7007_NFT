import React, { useContext, useState } from "react";
import Image from "next/image";
import logo from "@/assets/Header/M_logo.svg";
import M_logo_W from "@/assets/Header/M_logo_W.svg";
import { LuMenu } from "react-icons/lu";
import { RxCross2, RxDownload } from "react-icons/rx";
import { footerList } from "@/constants/menuList";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface Props {
  urlPath: string;
  darkMode: boolean;
}

export default function Mobile({ urlPath, darkMode }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const [hoverTG, setHoverTG] = useState(false);
  const [hoverX, setHoverX] = useState(false);

  return (
    <>
      <div className="fixed z-50 w-full px-5 pt-5 lg:hidden">
        <div
          className={`hidden w-full items-center justify-between self-stretch`}
        >
          {darkMode ? (
            <Image
              src={logo}
              alt="7007"
              className="z-50"
              width={45}
              height={45}
            />
          ) : (
            <Image
              src={M_logo_W.src}
              alt="7007"
              className="z-50"
              width={45}
              height={45}
            />
          )}
          {showMenu ? (
            <RxCross2
              size="40px"
              onClick={() => setShowMenu(false)}
              className="z-50"
            />
          ) : (
            <LuMenu
              size="40px"
              color={darkMode ? "#FFF" : "#000"}
              onClick={() => setShowMenu(true)}
              className="z-50"
            />
          )}
          <div
            className={`fixed right-0 top-0 z-30 flex h-full w-full justify-center bg-black/70 px-10 pt-[120px] text-white transition-all duration-200 ease-linear ${
              showMenu ? "" : "translate-x-full"
            }`}
          >
            <div className="flex h-full w-fit flex-col gap-[18px]">
              {footerList.map((item, index) => (
                <a key={index} className="text-2xl uppercase leading-[150%]">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-[50px] right-5 z-50 flex w-full justify-end lg:hidden">
        <div className="z-50 flex flex-col gap-[18px] text-right">
          <div
            className={`flex h-[45px] w-[45px] items-center justify-center rounded-full border pt-[2px] ${hoverTG ? "border-buttonGr shadow-buttonG" : "border-white"} bg-black transition-all`}
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
