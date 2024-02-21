import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import AccordingQA from "@/components/According/AccordingQA";
import { question } from "@/constants/menuList";
import { NFTContext } from "@/components/Provider";
import Dapp from "@/components/contracts/Dapp";
import ConnectBtn from "@/components/Button/ConnectBtn";
import Box from "@/components/AE/mintPage";
import { ethers } from "ethers";

declare let window: any;
const ACCEPT_NETWORK_ID = process.env.NEXT_PUBLIC_CHAIN_ID; // 31337 for hardhat local and 111333111 for Sepolia

export default function NFT() {
  const [totalSupply, setTotalSupply] = useState();
  const { UpdateContract, contract } = useContext(NFTContext);
  const [selectedAddress, setSelectedAddress] = useState<string>();
  const [errorMsg, setErrorMsg] = useState<string>();
  const [userBalance, setUserBalance] = useState<string>();

  const checkNetwork = () => {
    //TODO: 改成net_version
    if (window.ethereum.networkVersion === ACCEPT_NETWORK_ID) {
      return true;
    }

    let network = "mainnet";
    switch (ACCEPT_NETWORK_ID) {
      case "1":
        network = "Mainnet";
        break;
      case "31337":
        network = "Hardhat";
        break;
      case "11155111":
        network = "Sepolia";
        break;
    }
    setErrorMsg(`Please connect Metamask to the ${network} testnet`);
    return false;
  };
  const resetState = () => {
    UpdateContract(undefined);
    setSelectedAddress(undefined);
  };
  const initializeEthers = async () => {
    const _provider = new ethers.providers.Web3Provider(window.ethereum);
    UpdateContract(_provider.getSigner(0));
  };
  const initialize = async (newAddress: any) => {
    setSelectedAddress(newAddress);
    initializeEthers();
  };
  const connectWallet = async () => {
    if (!checkNetwork()) return;

    try {
      //TODO: 改成eth_requestAccounts
      const [selectedAddress] = await window.ethereum.enable();
      initialize(selectedAddress);
      window.ethereum.on("accountsChanged", ([newAddress]: [string]) => {
        if (newAddress === undefined) {
          return resetState();
        }
        initialize(newAddress);
      });

      window.ethereum.on("networkChanged", ([networkId]: [string]) => {
        if (networkId !== ACCEPT_NETWORK_ID) {
          return resetState();
        }
        resetState();
      });
    } catch (error) {
      console.error(error);
    }
  };
  const checkUserBalance = async () => {
    if (!selectedAddress) return;
    const balance = await contract?.balanceOf(selectedAddress);
    setUserBalance(balance.toString());
  };

  useEffect(() => {
    const interval = setInterval(async () => {
      const supply = await contract?.totalSupply();
      checkUserBalance();
      setTotalSupply(supply?.toString());
    }, 1500);

    return () => clearInterval(interval);
  }, [contract, selectedAddress]);

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
          <a className="mb-1">{`[ ${
            totalSupply ? totalSupply : "Pending . . . "
          } / 7007 ]`}</a>
          <ConnectBtn
            connectWallet={connectWallet}
            address={selectedAddress}
            errorMsg={errorMsg}
            userBalance={userBalance}
          />
          <a className="mt-1">· Mint price : free ·</a>
          <a>each wallet can mint 2</a>
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
    </>
  );
}
