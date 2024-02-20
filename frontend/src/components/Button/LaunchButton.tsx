import React, { useContext } from "react";
import arrow from "@/assets/button_arrow.png";
import arrow_W from "@/assets/button_arrow_W.png";
import Image from "next/image";
import { NFTContext } from "../Provider";

interface Prop {
  classname?: string;
  title?: string;
}
export default function LaunchButton({ classname, title }: Prop) {
  const { darkMode } = useContext(NFTContext);
  return (
    <button
      className={`flex h-[22px] items-center gap-[6px] bg-black px-2 text-white dark:bg-white dark:text-black ${classname}`}
    >
      <a className="text-xs leading-6 lg:text-lg">{title}</a>
      {darkMode ? (
        <Image src={arrow.src} alt="title" width={21} height={21} />
      ) : (
        <Image src={arrow_W.src} alt="title" width={21} height={21} />
      )}
    </button>
  );
}
