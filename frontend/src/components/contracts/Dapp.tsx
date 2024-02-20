import { BigNumber, ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import "web3modal"; // needed to get window.ethereum
import contractAddress from "@/contracts/contract-address.json";
import TOOTArtifact from "@/contracts/TOOT.json";
import WHITELIST from "../../whitelist.json";
import { TransactionErrorMessage } from "./TransactionErrorMessage";
import { WaitingForTransactionMessage } from "./WaitingForTransactionMessage";
import { NFTContext } from "../Provider";

declare let window: any;
const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

type StageInfo = {
  stageId: number;
  maxSupply: number;
  startTime: number;
  endTime: number;
  mintPrice: BigNumber;
};

const Dapp = () => {
  const [selectedAddress, setSelectedAddress] = useState<string>();
  const [txBeingSent, setTxBeingSent] = useState<string>();
  const [transactionError, setTransactionError] = useState<Error>();
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

  const dismissTransactionError = () => {
    setTransactionError(undefined);
  };
  const getRpcErrorMessage = (error: any) => {
    return error.message;
  };

  return (
    <>
      {/* <div className="container p-4 text-white">
        <div className="row">
          <div className="col-12">
            {txBeingSent && (
              <WaitingForTransactionMessage txHash={txBeingSent} />
            )}
            {transactionError && (
              <TransactionErrorMessage
                message={getRpcErrorMessage(transactionError)}
                dismiss={dismissTransactionError}
              />
            )}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Dapp;
