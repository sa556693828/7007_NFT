import { BigNumber, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import "web3modal"; // needed to get window.ethereum
import contractAddress from "@/contracts/contract-address.json";
import TOOTArtifact from "@/contracts/TOOT.json";
import WHITELIST from "../../whitelist.json";
import { TransactionErrorMessage } from "./TransactionErrorMessage";
import { WaitingForTransactionMessage } from "./WaitingForTransactionMessage";

declare let window: any;

const ACCEPT_NETWORK_ID = process.env.REACT_APP_CHAIN_ID; // 31337 for hardhat local and 42 for kovan
const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

const Dapp = () => {
  const [tokenUris, setTokenUris] = useState<Array<string>>([]);
  const [whitelistData, setWhitelistData] = useState<any>();
  const [uploadedTxId, setUploadedTxId] = useState<Array<string>>([]);
  const [tinaDAOData, setTinaDAOData] = useState<{
    name: string;
    symbol: string;
    // stageInfo: StageInfo;
  }>();
  const [tokenIds, setTokenIds] = useState<Array<number>>([]);
  const [selectedAddress, setSelectedAddress] = useState<string>();
  const [balance, setBalance] = useState<BigNumber>();
  const [txBeingSent, setTxBeingSent] = useState<string>();
  const [transactionError, setTransactionError] = useState<Error>();
  const [networkError, setNetworkError] = useState<string>();
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [token, setToken] = useState<ethers.Contract>();
  const [tinaDAO, setTinaDAO] = useState<ethers.Contract>();
  const [pollDataInterval, setPollDataInterval] = useState<NodeJS.Timeout>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.ethereum === undefined) {
      return () => {};
    }

    const connectWallet = async () => {
      try {
        const [selectedAddress] = await window.ethereum.enable();

        if (!checkNetwork()) {
          return;
        }

        initialize(selectedAddress);

        window.ethereum.on("accountsChanged", ([newAddress]: [string]) => {
          stopPollingData();
          if (newAddress === undefined) {
            return resetState();
          }
          initialize(newAddress);
        });

        window.ethereum.on("networkChanged", ([networkId]: [string]) => {
          stopPollingData();
          resetState();
        });
      } catch (error) {
        console.error(error);
      }
    };

    connectWallet();

    return () => {
      stopPollingData();
    };
  }, []);

  const initialize = async (userAddress: string) => {
    setSelectedAddress(userAddress);
    setWhitelistData(new Map(Object.entries(WHITELIST)));

    initializeEthers();
    getContractData();
    startPollingData();
  };

  const initializeEthers = async () => {
    let _provider = new ethers.providers.Web3Provider(window.ethereum);
    setProvider(_provider);

    setTinaDAO(
      new ethers.Contract(
        contractAddress.TOOT,
        TOOTArtifact.abi,
        _provider.getSigner(0),
      ),
    );
  };

  const startPollingData = () => {
    setPollDataInterval(setInterval(() => updateBalance(), 1000));
  };

  const stopPollingData = () => {
    clearInterval(pollDataInterval!);
    setPollDataInterval(undefined);
  };

  const getContractData = async () => {
    const name = await tinaDAO!.name();
    const symbol = await tinaDAO!.symbol();
    // const stageInfo = await tinaDAO!.stageInfo();
    setTinaDAOData({ name, symbol });
  };

  const updateBalance = async () => {
    const balance = await tinaDAO!.balanceOf(selectedAddress!);
    setBalance(balance);

    const tokenIds: Array<number> = [];
    const tokenUris: Array<string> = [];

    for (let i = 0; i < balance; i++) {
      const tokenId = await tinaDAO!.tokenOfOwnerByIndex(selectedAddress!, i);
      const tokenUri = await showTokenUriFromTokenId(tokenId);
      tokenIds.push(tokenId.toNumber());
      tokenUris.push(tokenUri!);
    }
    setTokenIds(tokenIds);
    setTokenUris(tokenUris);
  };

  const transferTokens = async (
    to: string,
    tokenId: BigNumber,
    tokenIds: BigNumber[] = [],
  ) => {
    try {
      dismissTransactionError();

      let tx: any = {};
      if (tokenIds.length === 0) {
        tx = await tinaDAO!.transferFrom(selectedAddress!, to, tokenId, {
          gasLimit: 1000000,
        });
      } else {
        tx = await tinaDAO!.batchTransferFrom(selectedAddress!, to, tokenIds, {
          gasLimit: 1000000,
        });
      }

      setTxBeingSent(tx.hash);

      const receipt = await tx.wait();

      if (receipt.status === 0) {
        throw new Error("Transaction failed");
      }

      await updateBalance();
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

  const showTokenUriFromTokenId = async (tokenId: number) => {
    try {
      dismissTransactionError();
      const tokenURI = await tinaDAO!.tokenURI(tokenId);
      const imgUri = await tokenUriToImg(tokenURI);
      return imgUri;
    } catch (error: any) {
      if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
        return;
      }
      console.error(error);
      setTransactionError(error);
    }
  };

  const ipfsToUrl = (url: string): string => {
    if (!url || !url.includes("ipfs://")) return url;
    return url.replace("ipfs://", "https://gateway.ipfs.io/ipfs/");
  };

  const tokenUriToImg = async (url: string) => {
    url = ipfsToUrl(url);
    const rawJson = await (await fetch(url)).text();
    const metaJSON = JSON.parse(rawJson);
    return ipfsToUrl(metaJSON.image);
  };

  const dismissTransactionError = () => {
    setTransactionError(undefined);
  };

  const dismissNetworkError = () => {
    setNetworkError(undefined);
  };

  const checkNetwork = () => {
    if (window.ethereum.networkVersion === ACCEPT_NETWORK_ID) {
      return true;
    }

    let network = "mainnet";
    switch (ACCEPT_NETWORK_ID) {
      case "4":
        network = "Rinkeby";
        break;
      case "3":
        network = "Ropsten";
        break;
      case "1":
        network = "Mainnet";
        break;
      case "31337":
        network = "Hardhat";
        break;
      case "42":
        network = "Kovan";
        break;
      case "137":
        network = "Polygon";
        break;
    }
    setNetworkError(`Please connect Metamask to the ${network} testnet`);

    return false;
  };

  const resetState = () => {
    setTokenUris([]);
    setUploadedTxId([]);
    setTokenIds([]);
    setTinaDAOData(undefined);
    setSelectedAddress(undefined);
    setBalance(undefined);
    setWhitelistData(undefined);
    setTxBeingSent(undefined);
    setTransactionError(undefined);
    setNetworkError(undefined);
    setProvider(undefined);
    setToken(undefined);
    setTinaDAO(undefined);
    stopPollingData();
  };

  return (
    <>
      <div className="container p-4">
        <div className="row">
          <div className="col-12">
            {txBeingSent && (
              <WaitingForTransactionMessage txHash={txBeingSent} />
            )}
            {/* {transactionError && (
              <TransactionErrorMessage
                message={getRpcErrorMessage(transactionError)}
                dismiss={dismissTransactionError}
              />
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dapp;
