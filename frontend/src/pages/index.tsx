import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import AccordingQA from "@/components/According/AccordingQA";
import Dapp from "@/components/contracts/Dapp";
import { question } from "@/constants/menuList";
import ConnectBtn from "@/components/Button/ConnectBtn";
import { NFTContext } from "@/components/Provider";
import Box from "@/components/AE/mintPage";

export default function NFT() {
  const { contract } = useContext(NFTContext);
  const [totalSupply, setTotalSupply] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(async () => {
  //     const supply = await contract?.totalSupply();
  //     setTotalSupply(supply?.toNumber());
  //   }, 1500);

  //   return () => clearInterval(interval);
  // }, [contract]);

  return (
    <>
      <Head>
        <title>7007 NFT</title>
      </Head>
      <div className="over relative z-20 flex h-full min-h-[100vh] w-full flex-col items-center justify-between overflow-x-hidden bg-black font-digital text-white lg:justify-start">
        <div className="z-20 mt-[60px] flex flex-col text-center">
          <a className="text-[10px]">Join the AI-Blockchain Revolution</a>
          <a className="text-[60px] -tracking-[9px]">EIP-7007</a>
        </div>
        <Dapp />
        <div className="z-20 mb-[35%] flex w-full flex-col items-center gap-4 text-center lg:mb-0 lg:mt-[19.5%]">
          <a className="mb-1">{`[ ${totalSupply} / 7007 ]`}</a>
          <ConnectBtn />
          <a className="mt-1">· Mint price : free ·</a>
          <a>each wallet can only Mint 1</a>
        </div>
        {/* <Box /> */}
      </div>
      <div className="z-50 flex min-h-[100vh] w-[360px] flex-col gap-5 pl-[40px] pt-[50px] font-digital text-white lg:absolute lg:bottom-[60px] lg:left-[50px] lg:min-h-0 lg:bg-opacity-60 lg:p-0">
        <a className="text-[16px]">About EIP-7007</a>
        <div className="w-full bg-black lg:bg-opacity-60">
          {question.map((q: any, index) => (
            <AccordingQA
              key={index}
              data={q}
              lastAccording={index === question.length + 1}
            />
          ))}
        </div>
      </div>
      <Dapp />
    </>
  );
}
