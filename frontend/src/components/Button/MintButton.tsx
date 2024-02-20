import React, { useState } from "react";

interface Props {
  title: string;
  arrow?: boolean;
}

export default function MintButton({ title, arrow }: Props) {
  const [hover, setHover] = useState(false);
  return (
    <div className="flex w-full items-center justify-center">
      <div
        className={`${hover ? "border-buttonGr radiusH" : "radius border-white"} h-1 w-1 rounded-full border transition-all`}
      />
      <div
        className={`${hover ? "shadow-buttonG border-buttonGr to-buttonGr" : "shadow-buttonW border-white to-white"} ml-3 mr-[18px] h-3 w-3 rounded-full border bg-gradient-to-r from-black from-25% transition-all`}
      />
      <button
        className="bg-buttonW shadow-buttonW hover:bg-buttonG hover:text-buttonGr hover:shadow-buttonG hover:border-buttonGr h-[45px] w-[254px] border-[0.5px] border-white transition-all"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {arrow && (
          <span
            className={`${hover ? "mr-3" : "mr-8 opacity-20"} transition-all`}
          >{`>>>`}</span>
        )}
        {title}
        {arrow && (
          <span
            className={`${hover ? "ml-3" : "ml-8 opacity-20"} transition-all`}
          >{`<<<`}</span>
        )}
      </button>
      <div
        className={`${hover ? "shadow-buttonG border-buttonGr to-buttonGr" : "shadow-buttonW border-white to-white"} ml-[18px] mr-3 h-3 w-3 rounded-full border bg-gradient-to-r from-black from-25% transition-all`}
      />
      <div
        className={`${hover ? "border-buttonGr radiusH" : "radius border-white"} h-1 w-1 rounded-full border transition-all`}
      />
    </div>
  );
}
