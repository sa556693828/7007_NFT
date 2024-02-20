import React, { useContext, useEffect, useState } from "react";
import { NFTContext } from "../Provider";
import BaseBtn from "./BaseBtn";
import WHITELIST from "@/whitelist.json";

interface Props {
  title: string;
  arrow?: boolean;
  whiteListType?: boolean;
  address?: any;
}

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

export default function MintButton({
  title,
  arrow,
  whiteListType = false,
  address,
}: Props) {
  const { TOOT } = useContext(NFTContext);
  const [TOOTData, setTOOTData] = useState<{
    name: string;
    symbol: string;
    startTime: number;
  }>();
  const [transactionError, setTransactionError] = useState<Error>();
  const [txBeingSent, setTxBeingSent] = useState<string>();
  const [whitelistData, setWhitelistData] = useState<Map<string, any>>();

  const dismissTransactionError = () => {
    setTransactionError(undefined);
  };

  useEffect(() => {
    if (TOOT === undefined) return;
    const getContractData = async () => {
      const name = await TOOT?.name();
      const symbol = await TOOT?.symbol();
      const startTime = await TOOT?.startTime();
      setTOOTData({ name, symbol, startTime });
    };
    getContractData();
    setWhitelistData(new Map(Object.entries(WHITELIST)));
  }, [TOOT]);

  const whiteListMint = async () => {
    try {
      dismissTransactionError();
      if (!address || !whitelistData || !TOOTData) return;
      if ((TOOTData.startTime - 12 * 3600) * 1000 > Date.now()) {
        alert("WhiteList sale hasn't started yet");
        return;
      }
      const data = whitelistData.get(address);
      if (!data) {
        //TODO:TOAST
        alert("Not in whitelist");
        return;
      }

      const voucher = data.voucher;
      const signature = data.signature;

      let tx = await TOOT!.mint(voucher, signature);

      setTxBeingSent(tx.hash);
      const receipt = await tx.wait();

      if (receipt.status === 0) {
        throw new Error("Transaction failed");
      } else {
        console.log("~~receipt", receipt);
      }
    } catch (error: any) {
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        return;
      }

      console.error(error);
      setTransactionError(error);
    } finally {
      setTxBeingSent(undefined);
    }
  };
  const mint = async () => {
    try {
      dismissTransactionError();
      if (!address || !TOOTData) return;
      if (TOOTData.startTime * 1000 > Date.now()) {
        alert("Sale hasn't started yet");
        return;
      }

      const tx = await TOOT!.mint();

      setTxBeingSent(tx.hash);
      const receipt = await tx.wait();

      if (receipt.status === 0) {
        throw new Error("Transaction failed");
      } else {
        console.log("~~receipt", receipt);
      }
    } catch (error: any) {
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        return;
      }

      console.error(error);
      setTransactionError(error);
    } finally {
      setTxBeingSent(undefined);
    }
  };

  return (
    <BaseBtn
      title={title}
      arrow={arrow}
      onClick={whiteListType ? whiteListMint : mint}
    />
  );
}
