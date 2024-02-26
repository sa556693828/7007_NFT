import React, { useContext, useEffect, useState } from "react";
import "web3modal"; // needed to get window.ethereum
import BaseBtn from "./BaseBtn";
import MintButton from "./MintButton";
import { toast } from "react-hot-toast";

interface Prop {
  connectWallet: () => void;
  address: string | undefined;
  errorMsg: string | undefined;
  userBalance: string | undefined;
}

const ConnectBtn = ({
  connectWallet,
  address,
  errorMsg,
  userBalance,
}: Prop) => {
  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum === undefined) {
      return () => {};
    }
    connectWallet();

    return () => {};
  }, []);

  return (
    <>
      {address ? (
        <>
          <MintButton
            title="MINT"
            arrow={true}
            address={address}
            balance={userBalance}
          />
          <MintButton
            title="WHITE LIST MINT"
            whiteListType={true}
            address={address}
            balance={userBalance}
          />
        </>
      ) : (
        <BaseBtn
          title="Connect Wallet"
          onClick={() => {
            connectWallet();
          }}
        />
      )}
    </>
  );
};

export default ConnectBtn;
