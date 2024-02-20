import Head from "next/head";
import MintButton from "@/components/Button/MintButton";
import Box from "@/components/AE/mintPage";
import AccordingQA from "@/components/According/AccordingQA";

export default function NFT() {
  const [open, setOpen] = [false, () => {}];
  const question = [
    {
      question: "Why you should participate in EIP 7007 ?",
      answer: [
        {
          title: "",
          content:
            "Participate in EIP-7007 to be at the forefront of blockchain and AI integration, unlocking new  economic opportunities, while shaping the future of decentralized AI.",
        },
      ],
      active: 0,
    },
    {
      question: "What is EIP - 7007 ?",
      answer: [
        {
          title: "・Discover the Power of EIP-7007",
          content:
            "EIP-7007 is THe First Ethereum AI standard to Financialize AI models, facilitating the creation of secure and verified AI NFTs on Ethereum.",
        },
      ],
      active: 0,
    },
    {
      question: "How to Participate in EIP-7007 boom ?",
      answer: [
        {
          title: "・Transform Your AI Models",
          content:
            "Monetize your AI models and share the results with your real users, pooling revenue from different places.",
        },
        {
          title: "・Invest in Tomorrow's AI Today",
          content:
            "Now you can own a piece of an AI model on Ethereum, a brand new asset designed to exist for AI in the long run.",
        },
        {
          title: "・Explore the Realm of AI NFTs",
          content:
            "AIGC NFT liberates creators' productivity and is a new form of digital asset, where we don't just own the model, we own the output and validate it through #opML!",
        },
      ],
      active: 0,
    },
  ];
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
        <div className="z-20 mb-[35%] flex w-full flex-col items-center gap-4 text-center lg:mb-0 lg:mt-[19.5%]">
          <a className="mb-1">{`[ 6006 / 7007 ]`}</a>
          <MintButton title="MINT" arrow={true} />
          <MintButton title="WHITE LIST MINT" />
          <a className="mt-1">· Mint price : free ·</a>
          <a>each wallet can only Mint 1</a>
        </div>
        <Box />
      </div>
      <div className="z-50 flex min-h-[100vh] w-[360px] flex-col gap-5 pl-[40px] pt-[50px] font-digital text-white lg:absolute lg:bottom-[60px] lg:left-[50px] lg:min-h-0 lg:bg-opacity-60 lg:p-0">
        <a className="text-[16px]">About EIP-7007</a>
        <div className="w-full bg-black lg:bg-opacity-60">
          {question.map((q: any, index) => (
            <AccordingQA key={index} data={q} />
          ))}
        </div>
      </div>
    </>
  );
}
