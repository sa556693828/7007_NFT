import React from "react";
import title from "@/assets/7007_title.svg";
import arrow from "@/assets/button_arrow.png";
import Image from "next/image";

interface Props {
  title: string;
}

export default function Mobile({ title }: Props) {
  return (
    <div className="relative z-20 flex h-[100dvh] flex-col items-center overflow-hidden transition-all lg:hidden"></div>
  );
}
