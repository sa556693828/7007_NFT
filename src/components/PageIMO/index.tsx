import React from "react";
import LaunchButton from "../Button/LaunchButton";

export default function IMO() {
  const title = `IMO`;
  const content = `Initial Model Offering:\n1. Mint Model Token from IMO\n2. Inference on-chain to Mint AI NFT\n3. Earn Revenue Share from Model Token`;
  return (
    <>
      <div className="z-20 flex min-h-screen w-full flex-col items-start bg-bgGrey pl-[14%] pt-[150px] text-white">
        <div className="relative flex items-end gap-[30px]">
          <a className="text-[45px] font-bold leading-none lg:max-w-full lg:text-[60px]">
            {title}
          </a>
          <LaunchButton classname="mb-[14px]" title="WHITE PAPER" />
        </div>
        <a className="whitespace-pre-wrap pb-[72px] pt-6 text-xs uppercase leading-[200%] lg:text-lg lg:leading-normal">
          {content}
        </a>
      </div>
    </>
  );
}