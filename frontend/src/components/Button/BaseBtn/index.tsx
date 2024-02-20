import React, { useState } from "react";

interface Props {
  title: string;
  arrow?: boolean;
  onClick?: () => void;
}

export default function BaseBtn({ title, arrow, onClick }: Props) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex w-full items-center justify-center"
      onClick={onClick ? onClick : () => {}}
    >
      <div
        className={`${hover ? "radiusH border-buttonGr" : "radius border-white"} h-1 w-1 rounded-full border transition-all`}
      />
      <div
        className={`${hover ? "border-buttonGr to-buttonGr shadow-buttonG" : "border-white to-white shadow-buttonW"} ml-3 mr-[18px] h-3 w-3 rounded-full border bg-gradient-to-r from-black from-25% transition-all`}
      />
      <button
        className="h-[45px] w-[254px] border-[0.5px] border-white bg-buttonW shadow-buttonW transition-all hover:border-buttonGr hover:bg-buttonG hover:text-buttonGr hover:shadow-buttonG"
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
        className={`${hover ? "border-buttonGr to-buttonGr shadow-buttonG" : "border-white to-white shadow-buttonW"} ml-[18px] mr-3 h-3 w-3 rounded-full border bg-gradient-to-r from-black from-25% transition-all`}
      />
      <div
        className={`${hover ? "radiusH border-buttonGr" : "radius border-white"} h-1 w-1 rounded-full border transition-all`}
      />
    </div>
  );
}
