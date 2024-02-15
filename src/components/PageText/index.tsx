import React, { useContext } from "react";
import black from "@/assets/PageText/black.svg";
import text from "@/assets/PageText/text.svg";
import white from "@/assets/PageText/white.svg";
import M_all from "@/assets/PageText/M_all.svg";
import all from "@/assets/PageText/all.svg";
import all_W from "@/assets/PageText/all_W.svg";
import Image from "next/image";
import { NFTContext } from "../Provider";

export default function Text() {
  const { darkMode } = useContext(NFTContext);
  return (
    <>
      <div className="relative z-20 flex min-h-[100dvh] w-full flex-col items-center justify-center bg-white text-black dark:bg-bgWhite">
        <Image
          src={M_all}
          alt="M_all"
          width={1080}
          height={457}
          className="w-4/5 lg:hidden"
        />
        {darkMode ? (
          <Image
            src={all.src}
            alt="all"
            width={1080}
            height={457}
            className="hidden w-[75%] lg:block"
          />
        ) : (
          <Image
            src={all_W}
            alt="all"
            width={1080}
            height={457}
            className="hidden w-[75%] lg:block"
          />
        )}

        {/* <Image
          src={black}
          alt="black"
          width={1080}
          height={457}
          className="absolute top-[50%] z-[11] hidden -translate-y-[50.5%] lg:block"
        />
        <Image
          src={text}
          alt="text"
          width={1080}
          height={480}
          className="absolute top-[50%] z-10 hidden -translate-y-[50%] lg:block"
        />
        <Image
          src={white}
          alt="white"
          width={1080}
          height={337}
          className="absolute bottom-[28.2%] hidden lg:block"
        /> */}
      </div>
    </>
  );
}
