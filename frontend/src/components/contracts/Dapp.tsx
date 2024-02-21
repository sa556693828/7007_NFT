import { BigNumber, ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import "web3modal"; // needed to get window.ethereum

const Dapp = () => {
  const [pollDataInterval, setPollDataInterval] = useState<NodeJS.Timeout>();
  const [balance, setBalance] = useState<BigNumber>();

  //TODO: 確認還剩下多少個NFT
  const startPollingData = () => {
    // setPollDataInterval(setInterval(() => updateBalance(), 1000));
  };

  const stopPollingData = () => {
    clearInterval(pollDataInterval!);
    setPollDataInterval(undefined);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum === undefined) {
      return;
    }
    startPollingData();

    return () => {
      stopPollingData();
    };
  }, []);

  //TODO: 確認還剩下多少個NFT
  // const updateBalance = async () => {
  //   const balance = await TOOT?.balanceOf(selectedAddress!);
  //   setBalance(balance);

  //   const tokenIds: Array<number> = [];
  //   const tokenUris: Array<string> = [];

  //   for (let i = 0; i < balance; i++) {
  //     const tokenId = await TOOT!.tokenOfOwnerByIndex(selectedAddress!, i);
  //     const tokenUri = await showTokenUriFromTokenId(tokenId);
  //     tokenIds.push(tokenId.toNumber());
  //     tokenUris.push(tokenUri!);
  //   }
  // };

  // const showTokenUriFromTokenId = async (tokenId: number) => {
  //   try {
  //     dismissTransactionError();
  //     const tokenURI = await TOOT!.tokenURI(tokenId);
  //     const imgUri = await tokenUriToImg(tokenURI);
  //     return imgUri;
  //   } catch (error: any) {
  //     if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
  //       return;
  //     }
  //     console.error(error);
  //     setTransactionError(error);
  //   }
  // };

  // const ipfsToUrl = (url: string): string => {
  //   if (!url || !url.includes("ipfs://")) return url;
  //   return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
  // };

  // const tokenUriToImg = async (url: string) => {
  //   url = ipfsToUrl(url);
  //   const rawJson = await (await fetch(url)).text();
  //   const metaJSON = JSON.parse(rawJson);
  //   return ipfsToUrl(metaJSON.image);
  // };

  return <></>;
};

export default Dapp;
