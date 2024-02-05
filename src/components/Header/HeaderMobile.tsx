import React, { useContext, useState } from "react";
import Image from "next/image";
import logo from "@/assets/Header/M_logo.svg";
import { LuMenu } from "react-icons/lu";
import { RxCross2, RxDownload } from "react-icons/rx";
import { footerList } from "@/constants/menuList";
import tg from "@/assets/Header/telegram.svg";
import x from "@/assets/Header/x.svg";

interface Props {
  urlPath: string;
}

export default function Mobile({ urlPath }: Props) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="fixed z-50 flex w-full items-center justify-between self-stretch px-5 pt-5 lg:hidden">
        <Image src={logo} alt="7007" className="z-50" />
        {showMenu ? (
          <RxCross2
            size="40px"
            onClick={() => setShowMenu(false)}
            className="z-50"
          />
        ) : (
          <LuMenu
            size="40px"
            color="#FFF"
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
      <div className="fixed bottom-[50px] right-5 z-50 flex w-full justify-end lg:hidden">
        <div className="z-50 flex flex-col gap-[18px] text-right">
          <Image src={tg.src} alt="discord" width={45} height={45} />
          <Image src={x.src} alt="discord" width={45} height={45} />
        </div>
      </div>
    </>
  );
}
