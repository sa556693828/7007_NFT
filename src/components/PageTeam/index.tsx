import React, { useState } from "react";
import eth from "@/assets/PageTeam/eth.svg";
import hyper from "@/assets/PageTeam/hyper.svg";
import story from "@/assets/PageTeam/story.svg";
import stratos from "@/assets/PageTeam/stratos.svg";
import zero from "@/assets/PageTeam/zero.svg";
import seven from "@/assets/PageTeam/seven.svg";
import Image from "next/image";
import { teamMember as team } from "@/constants/menuList";
type teamMember = (typeof team)[number]["id"];

export default function Team() {
  const [select, setSelect] = useState<teamMember>("CEO");
  const title = `Team`;

  return (
    <>
      <div className="z-20 flex h-full min-h-[100dvh] w-full px-10 pb-[8%] pt-[150px] lg:gap-[12%] lg:pl-[14%] lg:pt-[180px]">
        <div className="flex w-full flex-col lg:w-fit lg:gap-[100px]">
          <div className="flex flex-col gap-6 lg:gap-[45px]">
            <a className="text-[45px] font-bold leading-none lg:max-w-full lg:text-[60px]">
              {title}
            </a>
            <div className="flex flex-col gap-[15px] lg:max-w-2xl lg:flex-row lg:flex-wrap">
              {team.map((member) => (
                <button
                  className={`w-fit rounded-[30px] border-2 px-7 py-2 border-[${member.color}] ${
                    select === member.id
                      ? `bg-[${team.find((member) => member.id === select)?.color}] text-black`
                      : `bg-transparent text-[${member.color}]`
                  } transition-all duration-300 hover:bg-[${member.color}] hover:text-black hover:border-[${member.color}]`}
                  key={member.id}
                  onClick={() => setSelect(member.id)}
                >
                  <a className="text-[20px] font-bold">{member.name}</a>
                </button>
              ))}
            </div>
          </div>
          <div className="mb-[100px] mt-[52px] flex w-full flex-col items-center justify-center gap-[25px] lg:hidden">
            {/* <div
              className={`flex h-[270px] w-[270px] items-center justify-center border-2 border-[${
                team.find((member) => member.id === select)?.color
              }] rounded-[50%]`}
            >
              <div
                className={`flex h-[230px] w-[230px] bg-[${
                  team.find((member) => member.id === select)?.color
                }] items-center justify-center rounded-[50%] border-2 border-white`}
              >
                <a className="pt-8 align-bottom text-[150px] leading-none">
                  {team
                    .find((member) => member.id === select)
                    ?.name.slice(0, 2)}
                </a>
              </div>
            </div>
            <div
              className={`flex w-full items-center justify-center border-2 text-lg font-bold border-[${
                team.find((member) => member.id === select)?.color
              }] rounded-[65px] py-3`}
            >
              {team.find((member) => member.id === select)?.name.slice(3)}
            </div> */}
          </div>
          <div className="flex flex-col gap-[28px]">
            <a className="text-[45px] font-bold leading-none lg:max-w-full lg:text-[60px]">
              partner
            </a>
            <div className="mb-3 flex flex-col gap-10 lg:mb-0 lg:flex-row">
              <Image src={story} alt="story" width={150} height={50} />
              <Image src={eth} alt="eth" width={150} height={50} />
              <Image src={hyper} alt="hyper" width={150} height={50} />
            </div>
            <Image src={stratos} alt="stratos" width={240} height={50} />
          </div>
        </div>
        <div className="hidden flex-col gap-6 pt-1 lg:flex">
          <Image
            src={seven}
            alt="seven"
            width={107}
            height={112}
            className=""
          />
          <Image src={zero} alt="zero" width={107} height={112} className="" />
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
// border-[#FF974C]
// hover:border-[#FF974C]
// hover:bg-[#FF974C]
// bg-[#FF974C]
// text-[#FF974C]
// border-[#FFF]
// hover:border-[#FFF]
// hover:bg-[#FFF]
// bg-[#FFF]
// text-[#FFF]
// border-[#8550F6]
// hover:border-[#8550F6]
// hover:bg-[#8550F6]
// bg-[#8550F6]
// text-[#8550F6]
// border-[#2B8BFC]
// hover:border-[#2B8BFC]
// hover:bg-[#2B8BFC]
// bg-[#2B8BFC]
// text-[#2B8BFC]
// border-[#F97ACE]
// hover:border-[#F97ACE]
// hover:bg-[#F97ACE]
// bg-[#F97ACE]
// text-[#F97ACE]
// border-[#0FE5F2]
// hover:border-[#0FE5F2]
// hover:bg-[#0FE5F2]
// bg-[#0FE5F2]
// text-[#0FE5F2]
// border-[#83F04F]
// hover:border-[#83F04F]
// hover:bg-[#83F04F]
// bg-[#83F04F]
// text-[#83F04F]
