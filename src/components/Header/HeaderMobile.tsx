import React, { useContext, useState } from "react";
import Image from "next/image";
import logo from "@/assets/M_logo.svg";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

interface Props {
  urlPath: string;
}

export default function Mobile({ urlPath }: Props) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex fixed w-full items-center justify-between self-stretch px-5 lg:hidden pt-5 z-50">
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
        className={`fixed right-0 top-0 z-20 h-full w-full bg-black opacity-70 pl-4 text-white transition-all duration-300 ease-linear ${
          showMenu ? "" : "translate-x-full"
        }`}
      >
        <div className="flex h-full max-w-[220px] flex-col gap-8 uppercase">
          <a className="text-sm leading-[140%] tracking-[.84px]">About us</a>
          <a className="text-sm leading-[140%] tracking-[.84px]">
            our collection
          </a>
          <div className="h-[1px] w-[220px] bg-bakoW opacity-40" />
          {/* {Object.entries(profilePath).map(([path, url]) => (
            <a
              key={path}
              className={`${
                url === "/" ? "opacity-40" : ""
              } text-sm leading-[140%] tracking-[.84px]`}
            >
              {path}
            </a>
          ))} */}
        </div>
      </div>
    </div>
  );
}
