import React, { useContext, useState } from "react";
import Image from "next/image";
import M_black from "@/assets/Footer/M_black.svg";
import { footerList, menuList } from "@/constants/menuList";

interface Props {
  urlPath?: string;
}

export default function Mobile({ urlPath }: Props) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex w-full flex-col gap-[60px] px-[40px] pb-[146px] pt-[90px] text-black lg:hidden">
      <div className="flex flex-col gap-[18px]">
        {footerList.map((item, index) => (
          <a
            key={index}
            className="text-2xl font-normal uppercase leading-[150%]"
          >
            {item.name}
          </a>
        ))}
      </div>
      <a className="flex text-xs font-bold">
        7007.Studio © All rights reserved.
      </a>
      <Image
        src={M_black}
        alt="black"
        width={1168}
        height={268}
        className="w-full"
      />
    </div>
  );
}
