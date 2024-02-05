import React from "react";
import LaunchButton from "../Button/LaunchButton";

export default function Sign() {
  const title = `Sign up\nfor\nwaitlist`;
  const content = `Revolutionizing AI\nwith transparent,\non-chain model publishing\nand creator compensation.`;
  return (
    <>
      <div className="z-20 flex min-h-screen w-full gap-[5%] bg-bgGrey pl-[14%] pt-[180px]">
        <div className="flex flex-col gap-6 whitespace-pre-wrap">
          <a className="text-[45px] font-bold leading-none lg:max-w-full lg:text-[60px]">
            {title}
          </a>
          <a className="text-xs uppercase leading-6 lg:text-lg">{content}</a>
          <LaunchButton classname="mt-1 w-fit" title="launch app" />
        </div>
        image
      </div>
    </>
  );
}
