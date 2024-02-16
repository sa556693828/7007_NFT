import Head from "next/head";
import MintButton from "@/components/Button/MintButton";

export default function NFT() {
  const question = [
    { q: "Why you should participate in EIP 7007 ?", a: "to be continue" },
    { q: "What is EIP - 7007 ?", a: "to be continue" },
    { q: "How to Participate in EIP-7007 boom ?", a: "to be continue" },
  ];
  return (
    <>
      <Head>
        <title>7007 NFT</title>
      </Head>
      <div className="font-digital over relative z-20 flex min-h-[100dvh] w-full flex-col items-center justify-between overflow-x-hidden bg-black text-white lg:justify-start">
        <div className="z-20 mt-[60px] flex flex-col text-center">
          <a className="text-[10px]">Join the AI-Blockchain Revolution</a>
          <a className="text-[60px] -tracking-[9px]">EIP-7007</a>
        </div>
        <div className="z-20 mb-[42%] flex w-full flex-col items-center gap-4 text-center lg:mb-0 lg:mt-[25%]">
          <a className="mb-1">{`{ 6006 / 7007 }`}</a>
          <MintButton title="MINT" arrow={true} />
          <MintButton title="WHITE LIST MINT" />
          <a className="mt-1">· Mint price:0.007007 ETH ·</a>
          <a>each wallet can only Mint 1</a>
        </div>
        {/* <Box /> */}
      </div>
      <div className="font-digital z-50 flex min-h-[100dvh] w-[360px] flex-col gap-5 pl-[40px] pt-[50px] text-white lg:absolute lg:bottom-[60px] lg:left-[50px] lg:min-h-0 lg:p-0">
        <a className="text-[16px]">About EIP-7007</a>
        <div className="w-full lg:bg-black/60">
          {question.map((q, index) => (
            <div key={index}>
              <div className="py-[6px]">
                <a className="pl-[8px] text-[10px] tracking-tight">{q.q}</a>
              </div>
              <div className="h-[1px] w-full bg-white" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
