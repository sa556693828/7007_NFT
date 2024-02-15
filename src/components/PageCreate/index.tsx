import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import createFull from "@/assets/PageCreate/createFull.svg";
import M_createFull from "@/assets/PageCreate/M_createFull.svg";
import ai from "@/assets/PageCreate/ai.svg";
import art from "@/assets/PageCreate/art.svg";
import creat from "@/assets/PageCreate/creat.svg";
import idea from "@/assets/PageCreate/idea.svg";
import model from "@/assets/PageCreate/model.svg";
import NFT from "@/assets/PageCreate/NFT.svg";
import ownership from "@/assets/PageCreate/ownership.svg";
import tokens from "@/assets/PageCreate/tokens.svg";
import Image from "next/image";

export default function Create() {
  const title = `creator centric`;
  const content = `ai model + aigc nft = 7007`;

  return (
    <>
      <div className="relative z-20 flex min-h-[100dvh] w-full flex-col items-center justify-center bg-white dark:bg-bgGrey">
        <a className="max-w-xs text-center text-[45px] font-bold lg:max-w-full lg:text-[60px]">
          {title}
        </a>
        <a className="text-xs font-bold uppercase leading-[200%] lg:text-2xl lg:leading-normal">
          {content}
        </a>
        <Image
          src={createFull}
          alt="createFull"
          width={1200}
          height={600}
          className="absolute top-[55.5%] hidden -translate-y-[55.5%] lg:block"
        />
        <Image
          src={M_createFull}
          alt="createFull"
          width={448}
          height={368}
          className="absolute top-[45%] block -translate-y-[45%] lg:hidden"
        />
      </div>
    </>
  );
}
