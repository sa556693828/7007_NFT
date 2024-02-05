import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

export default function Create() {
  const title = `creator centric`;
  const content = `ai model + aigc nft = 7007`;

  return (
    <>
      <div className="z-20 flex min-h-screen w-full flex-col items-center justify-center bg-bgGrey text-white">
        <a className="max-w-xs text-center text-[45px] font-bold lg:max-w-full lg:text-[60px]">
          {title}
        </a>
        <a className="text-xs font-bold uppercase leading-[200%] lg:text-2xl lg:leading-normal">
          {content}
        </a>
      </div>
    </>
  );
}
