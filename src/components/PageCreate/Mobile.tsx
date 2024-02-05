import React from "react";
import title from "@/assets/7007_title.svg";
import arrow from "@/assets/button_arrow.png";
import Image from "next/image";

interface Props {
  title: string;
  content: string;
}

export default function Mobile({ title, content }: Props) {
  return (
    <div className="flex-col lg:hidden flex items-center h-[100dvh] relative overflow-hidden z-20 transition-all"></div>
  );
}
