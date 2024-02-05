import React from "react";

export default function Team() {
  const title = `Team`;

  return (
    <>
      <div className="z-20 flex min-h-screen w-full gap-[12%] pl-[14%] pt-[180px]">
        <div className="space-y-[100px]">
          <div className="flex flex-col gap-[45px]">
            <a className="text-[45px] font-bold leading-none lg:max-w-full lg:text-[60px]">
              {title}
            </a>
            ss
          </div>
          <div className="flex flex-col gap-[28px]">
            <a className="text-[45px] font-bold leading-none lg:max-w-full lg:text-[60px]">
              partner
            </a>
            <div className="flex">
              <div>s</div>
              <div>a</div>
              <div>s</div>
            </div>
            <div className="flex">
              <div>logo</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-1">
          <div>7</div>
          <div>0</div>
          <div>0</div>
          <div>7</div>
        </div>
      </div>
    </>
  );
}
