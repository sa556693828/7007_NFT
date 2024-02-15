import React, { useContext } from "react";
import LaunchButton from "../Button/LaunchButton";
import flow from "@/assets/PageIMO/flow.svg";
import flow_W from "@/assets/PageIMO/flow_W.svg";
import M_flow from "@/assets/PageIMO/M_flow.svg";
import Image from "next/image";
import { NFTContext } from "../Provider";

export default function IMO() {
  const { darkMode } = useContext(NFTContext);
  const title = `IMO`;
  const content = `Initial Model Offering:\n1. Mint Model Token from IMO\n2. Inference on-chain to Mint AI NFT\n3. Earn Revenue Share from Model Token`;
  return (
    <>
      <div className="z-20 flex min-h-[100dvh] w-full flex-col items-center bg-white pb-12 pt-[150px] lg:items-start lg:pl-[14%]  dark:bg-bgGrey">
        <div className="relative flex w-full items-end gap-[30px] pl-10 lg:pl-0">
          <a className="text-[45px] font-bold leading-none lg:max-w-full lg:text-[60px]">
            {title}
          </a>
          <LaunchButton classname="mb-[14px]" title="WHITE PAPER" />
        </div>
        <a className="w-full max-w-[304px] whitespace-pre-wrap pb-[72px] pt-6 text-xs uppercase leading-[200%] lg:max-w-full lg:text-lg lg:leading-normal">
          {content}
        </a>
        {darkMode ? (
          <Image
            src={flow}
            alt="flow"
            width={826}
            height={240}
            className="hidden lg:block"
          />
        ) : (
          <Image
            src={flow_W}
            alt="flow"
            width={826}
            height={240}
            className="hidden lg:block"
          />
        )}

        <Image
          src={M_flow}
          alt="M_flow"
          width={265}
          height={622}
          className="block lg:hidden"
        />
      </div>
    </>
  );
}
