import React from "react";
import arrow from "@/assets/button_arrow.png";
import Image from "next/image";

interface Prop {
  classname?: string;
  title?: string;
}
export default function LaunchButton({ classname, title }: Prop) {
  return (
    <button
      className={`flex h-[22px] items-center gap-[6px] bg-white px-2 text-black ${classname}`}
    >
      <a className="text-lg leading-6">{title}</a>
      <Image src={arrow.src} alt="title" width={21} height={21} />
    </button>
  );
}
