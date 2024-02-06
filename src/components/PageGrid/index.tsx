import React from "react";
import M_small from "@/assets/PageGrid/M_small.svg";
import small from "@/assets/PageGrid/small.svg";
import Image from "next/image";

export default function Grid() {
  return (
    <>
      <div className="z-20 flex min-h-fit w-full flex-col items-center justify-center">
        <Image
          src={small}
          alt="black"
          width={1440}
          height={900}
          className="h-full w-full object-contain"
        />
      </div>
    </>
  );
}
