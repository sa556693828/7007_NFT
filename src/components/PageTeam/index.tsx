import React from "react";
import eth from "@/assets/PageTeam/eth.svg";
import hyper from "@/assets/PageTeam/hyper.svg";
import story from "@/assets/PageTeam/story.svg";
import stratos from "@/assets/PageTeam/stratos.svg";
import zero from "@/assets/PageTeam/zero.svg";
import seven from "@/assets/PageTeam/seven.svg";
import Image from "next/image";
import { teamMember as team } from "@/constants/menuList";
// border-[#FF974C]
// border-[#FFF]
// border-[#8550F6]
// border-[#2B8BFC]
// border-[#F97ACE]
// border-[#0FE5F2]
// border-[#83F04F]
export default function Team() {
  const title = `Team`;

  return (
    <>
      <div className="z-20 flex w-full gap-[12%] pb-[8%] pl-[14%] pt-[180px]">
        <div className="space-y-[100px]">
          <div className="flex flex-col gap-[45px]">
            <a className="text-[45px] font-bold leading-none lg:max-w-full lg:text-[60px]">
              {title}
            </a>
            <div className="flex max-w-2xl flex-wrap gap-[15px]">
              {team.map((member) => (
                <button
                  className={`w-fit rounded-[30px] border-2 px-7 py-2 border-[${member.color}]`}
                  key={member.id}
                >
                  <a className="text-[20px] font-bold">{member.name}</a>
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-[28px]">
            <a className="text-[45px] font-bold leading-none lg:max-w-full lg:text-[60px]">
              partner
            </a>
            <div className="flex gap-10">
              <Image
                src={story}
                alt="story"
                width={150}
                height={50}
                className=""
              />
              <Image src={eth} alt="eth" width={150} height={50} className="" />
              <Image
                src={hyper}
                alt="hyper"
                width={150}
                height={50}
                className=""
              />
            </div>
            <Image
              src={stratos}
              alt="stratos"
              width={240}
              height={50}
              className=""
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 pt-1">
          <Image
            src={seven}
            alt="seven"
            width={107}
            height={112}
            className=""
          />
          <Image src={zero} alt="zero" width={107} height={112} className="" />{" "}
          <Image src={zero} alt="zero" width={107} height={112} className="" />
          <Image
            src={seven}
            alt="seven"
            width={107}
            height={112}
            className=""
          />
        </div>
      </div>
    </>
  );
}
