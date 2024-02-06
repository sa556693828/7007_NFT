import React from "react";
import LaunchButton from "../Button/LaunchButton";
import img from "@/assets/PageSign/7007img.svg";
import ai from "@/assets/PageSign/ai.svg";
import art from "@/assets/PageSign/art.svg";
import creat from "@/assets/PageSign/creat.svg";
import idea from "@/assets/PageSign/idea.svg";
import model from "@/assets/PageSign/model.svg";
import NFT from "@/assets/PageSign/NFT.svg";
import ownership from "@/assets/PageSign/ownership.svg";
import tokens from "@/assets/PageSign/tokens.svg";
import Image from "next/image";

export default function Sign() {
  const title = `Sign up\nfor\nwaitlist`;
  const content = `Revolutionizing AI\nwith transparent,\non-chain model publishing\nand creator compensation.`;
  return (
    <div className="z-20 flex h-full min-h-[100dvh] w-full flex-col items-center gap-[5%] bg-bgGrey pb-[90px] pt-40 lg:min-h-screen lg:flex-row lg:items-start lg:pl-[14%] lg:pt-[180px]">
      <div className="flex flex-col gap-6 whitespace-pre-wrap">
        <a className="text-[45px] font-bold leading-none lg:max-w-full lg:text-[60px]">
          {title}
        </a>
        <a className="text-xs uppercase leading-6 lg:text-lg">{content}</a>
        <LaunchButton classname="mt-1 w-fit" title="launch app" />
      </div>
      <Image
        src={img}
        alt="img"
        width={546}
        height={546}
        className="mt-[45px] px-10 lg:-mt-12 lg:px-0"
      />
    </div>
  );
}
