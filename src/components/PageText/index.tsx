import React from "react";
import black from "@/assets/PageText/black.svg";
import text from "@/assets/PageText/text.svg";
import white from "@/assets/PageText/white.svg";
import Image from "next/image";

export default function Text() {
  const title = `New asset\nclass : AI Models`;

  return (
    <>
      <div className="relative z-20 flex min-h-screen w-full flex-col items-center justify-center bg-bgWhite text-black">
        <Image
          src={black}
          alt="black"
          width={1080}
          height={457}
          className="absolute top-[50%] z-[11] -translate-y-[50.5%]"
        />
        <Image
          src={text}
          alt="text"
          width={1080}
          height={480}
          className="absolute top-[50%] z-10 -translate-y-[50%]"
        />
        <Image
          src={white}
          alt="white"
          width={1080}
          height={337}
          className="absolute bottom-[28.2%]"
        />
      </div>
    </>
  );
}
