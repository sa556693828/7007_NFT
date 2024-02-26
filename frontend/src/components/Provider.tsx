import { createContext, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import contractAddress from "@/contracts/contract-address.json";
import TOOTArtifact from "@/contracts/TOOT.json";
const ACCEPT_NETWORK_ID = process.env.NEXT_PUBLIC_CHAIN_ID; // 31337 for hardhat local and 111333111 for Sepolia

export const NFTContext = createContext<{
  darkMode: boolean;
  TOOT: ethers.Contract | undefined;
  contract: ethers.Contract | undefined;
  toggleDarkMode: () => void;
  UpdateContract: (contract: any) => void;
}>({
  darkMode: false,
  TOOT: undefined,
  contract: undefined,
  toggleDarkMode: () => {},
  UpdateContract: () => {},
});

export const NFTProvider = ({ children }: { children: any }) => {
  const [userVid, setUserVid] = useState("");
  const [TOOT, setTOOT] = useState<ethers.Contract | undefined>(undefined);
  const [contract, setContract] = useState<ethers.Contract | undefined>(
    undefined,
  );
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    const darkModeEnabled = document.documentElement.classList.contains("dark");
    if (darkModeEnabled) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    localStorage.setItem("darkModeEnabled", darkModeEnabled.toString());
  };
  useEffect(() => {
    const _provider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_MAINNET_RPC_URL,
    );
    const contract = new ethers.Contract(
      contractAddress.TOOT,
      TOOTArtifact.abi,
      _provider,
    );
    setContract(contract);
  }, []);

  //TODO: useSWR 需要用戶connect才建立嗎？
  const UpdateContract = useCallback(
    async (singer: any) => {
      const chainId = await window.ethereum.request({ method: "net_version" });

      if (!singer || chainId !== ACCEPT_NETWORK_ID) {
        setTOOT(undefined);
        return;
      }
      setTOOT(
        new ethers.Contract(contractAddress.TOOT, TOOTArtifact.abi, singer),
      );
    },
    [TOOT],
  );
  useEffect(() => {
    // 當頁面首次加載時，檢查本地存儲中的深色模式開關狀態
    const darkModeEnabled = localStorage.getItem("darkModeEnabled");
    if (darkModeEnabled === "true") {
      document.documentElement.classList.add("dark");
    }
  }, []);
  useEffect(() => {
    const darkModeEnabled = document.documentElement.classList.contains("dark");
    if (darkModeEnabled) {
      setDarkMode(true);
    }
  }, []);

  return (
    <NFTContext.Provider
      value={{
        darkMode,
        TOOT,
        contract,
        toggleDarkMode,
        UpdateContract,
      }}
    >
      {children}
    </NFTContext.Provider>
  );
};
