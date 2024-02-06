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
    <div className="z-20 hidden min-h-[100dvh] w-full flex-col items-center justify-center text-white lg:flex">
      <a className="max-w-full text-[60px] font-bold">{title}</a>
      <a className="text-2xl font-bold uppercase">{content}</a>
    </div>
  );
}
