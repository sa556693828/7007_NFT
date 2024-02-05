import React from "react";
import title from "@/assets/7007_title.svg";
import arrow from "@/assets/button_arrow.png";
import Image from "next/image";

interface Props {
  title: string;
  content: string;
}

export default function Desktop({ title, content }: Props) {
  return (
    <div className="z-20 hidden min-h-screen w-full flex-col items-center justify-center text-white lg:flex">
      <a className="max-w-xs text-[45px] font-bold lg:max-w-full lg:text-[60px]">
        {title}
      </a>
      <a className="font-bold uppercase lg:text-2xl">{content}</a>
    </div>
  );
}
