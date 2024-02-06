import React, { useState } from "react";
import allText from "@/assets/Footer/allText.png";
import { menuList } from "@/constants/menuList";
import Image from "next/image";

interface Props {
  urlPath?: string;
}

export default function Desktop({ urlPath }: Props) {
  return (
    <div className="w-full space-y-[50px] pb-[130px] pl-[90px] pt-[119px] text-black">
      <Image
        src={allText}
        alt="allText"
        width={1168}
        height={268}
        className="w-4/5"
      />
      <a className="flex text-lg font-bold">
        7007.Studio © All rights reserved.
      </a>
    </div>
  );
}
