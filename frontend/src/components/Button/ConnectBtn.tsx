import { ethers } from "ethers";
import React, { useContext, useEffect, useState } from "react";
import "web3modal"; // needed to get window.ethereum
import { NFTContext } from "../Provider";
import BaseBtn from "./BaseBtn";
import MintButton from "./MintButton";
import { toast } from "react-hot-toast";

declare let window: any;

const ACCEPT_NETWORK_ID = process.env.NEXT_PUBLIC_CHAIN_ID; // 31337 for hardhat local and 42 for kovan

const ConnectBtn = () => {
  const { UpdateContract } = useContext(NFTContext);
  const [selectedAddress, setSelectedAddress] = useState<string>();
  const [errorMsg, setErrorMsg] = useState<string>();

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
    // const simpleRpcProvider = new ethers.providers.JsonRpcProvider(INFURA_PRC_URL);
    // setProvider(_provider);
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
        //TODO:test
        console.log("~~accountsChanged", newAddress);
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

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum === undefined) {
      return () => {};
    }
    connectWallet();

    return () => {
      window.ethereum.removeAllListeners("accountsChanged");
      window.ethereum.removeAllListeners("networkChanged");
    };
  }, []);

  return (
    <>
      {selectedAddress ? (
        <>
          <MintButton title="MINT" arrow={true} address={selectedAddress} />
          <MintButton
            title="WHITE LIST MINT"
            whiteListType={true}
            address={selectedAddress}
          />
        </>
      ) : (
        <BaseBtn
          title="Connect Wallet"
          onClick={() => {
            connectWallet();
            if (window.ethereum.networkVersion !== ACCEPT_NETWORK_ID) {
              toast(errorMsg as string);
            }
          }}
        />
      )}
    </>
  );
};
export default ConnectBtn;
