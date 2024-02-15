import React from "react";
import title from "@/assets/7007_title.svg";
import title_W from "@/assets/7007_title_W.svg";
import Image from "next/image";
import LaunchButton from "../Button/LaunchButton";

interface Props {
  content: string;
  darkMode: boolean;
}

export default function LandingDesktop({ content, darkMode }: Props) {
  return (
    <div className="z-20 hidden min-h-[100dvh] w-full flex-col items-center gap-[50px] bg-bgWhite pr-44 pt-[250px] lg:flex dark:bg-black">
      {darkMode ? (
        <Image src={title.src} alt="title" width={576} height={128} />
      ) : (
        <Image src={title_W.src} alt="title" width={576} height={128} />
      )}
      <div className="flex flex-row items-end justify-between gap-6">
        <a className="max-w-lg whitespace-pre font-normal leading-6">
          {content}
        </a>
        <LaunchButton title="launch app" />
      </div>
      {/* <button
        className="z-50 rounded-full bg-gray-300 px-4 py-2 focus:outline-none dark:bg-amber-500"
        onClick={() => toggleDarkMode()}
      >
        Toggle Dark Mode
      </button> */}
    </div>
  );
}
