import React, { useContext, useEffect, useState } from "react";
import { NFTContext } from "../Provider";
import BaseBtn from "./BaseBtn";
import WHITELIST from "@/whitelist.json";
import { toast } from "react-hot-toast";

interface Props {
  title: string;
  arrow?: boolean;
  whiteListType?: boolean;
  address?: any;
  balance?: string;
}

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

export default function MintButton({
  title,
  arrow,
  whiteListType = false,
  address,
  balance,
}: Props) {
  const { TOOT } = useContext(NFTContext);
  const [TOOTData, setTOOTData] = useState<{
    name: string;
    symbol: string;
    startTime: number;
  }>();
  const scanWeb = process.env.NEXT_PUBLIC_SCAN_ADDRESS;
  const [whitelistData, setWhitelistData] = useState<Map<string, any>>();

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

  const displayTransactionStatus = async (tx: any) => {
    const txLoading = toast.loading(
      <span className="whitespace-pre-wrap">
        Waiting for transaction: {"\n"}
        <a
          href={`${scanWeb}tx/${tx.hash}`}
          target="_blank"
          className="underline underline-offset-4"
        >
          <strong>
            {tx.hash.substring(0, 10)}. . .
            {tx.hash.substring(tx.hash.length - 10, tx.hash.length)}
          </strong>
        </a>
      </span>,
    );
    const receipt = await tx.wait();
    if (receipt.status === 0) {
      toast.error(
        <span className="whitespace-pre-wrap">
          Transaction failed: {"\n"}
          <a
            href={`${scanWeb}tx/${tx.hash}`}
            target="_blank"
            className="underline underline-offset-4"
          >
            <strong>
              {tx.hash.substring(0, 10)}. . .
              {tx.hash.substring(tx.hash.length - 10, tx.hash.length)}
            </strong>
          </a>
        </span>,
        {
          id: txLoading,
        },
      );
      throw new Error("Transaction failed");
    } else {
      toast.success(
        <span className="whitespace-pre-wrap">
          Transaction success: {"\n"}
          <a
            href={`https://sepolia.etherscan.io/tx/${tx.hash}`}
            target="_blank"
            className="underline underline-offset-4"
          >
            <strong>
              {tx.hash.substring(0, 10)}. . .
              {tx.hash.substring(tx.hash.length - 10, tx.hash.length)}
            </strong>
          </a>
        </span>,
        {
          id: txLoading,
        },
      );
    }
  };

  const mintToken = async (whitelist: boolean) => {
    toast.remove();
    const loadingToast = toast.loading("Minting...");

    try {
      if (!address || !TOOTData) return;

      // Check if sale has started
      if (!whitelist && TOOTData.startTime * 1000 > Date.now()) {
        toast("Sale hasn't started yet");
        return;
      }

      // Check if whitelist sale has started
      if (whitelist && (TOOTData.startTime - 24 * 3600) * 1000 > Date.now()) {
        toast.dismiss(loadingToast);
        toast("WhiteList sale hasn't started yet.");
        return;
      }

      if (Number(balance) >= 2) {
        toast.dismiss(loadingToast);
        toast.error("Sorry! You can only mint 2.");
        return;
      }
      // If whitelist minting, check whitelist data
      if (whitelist && whitelistData) {
        const data = whitelistData.get(address.toLowerCase());
        if (!data) {
          toast.dismiss(loadingToast);
          toast("Sorry! You're not in whitelist.");
          return;
        }

        const voucher = data.voucher;
        const signature = data.signature;

        let tx = await TOOT?.whiteListMint(voucher, signature);
        displayTransactionStatus(tx);
      } else {
        // For regular minting

        const tx = await TOOT?.mint();
        displayTransactionStatus(tx);
      }
    } catch (error: any) {
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        return;
      }
      console.error(error);
      toast.error(`Sending transaction error`);
    } finally {
      toast.dismiss(loadingToast);
    }
  };
  return (
    <BaseBtn
      title={title}
      arrow={arrow}
      onClick={() => mintToken(whiteListType)}
    />
  );
}
