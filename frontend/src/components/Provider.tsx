import { createContext, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";

export const NFTContext = createContext<{
  darkMode: boolean;
  toggleDarkMode: () => void;
}>({
  darkMode: false,
  toggleDarkMode: () => {},
});
interface Cookies {
  [key: string]: string;
}
export const NFTProvider = ({ children }: { children: any }) => {
  const [userVid, setUserVid] = useState("");
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
        toggleDarkMode,
      }}
    >
      {children}
    </NFTContext.Provider>
  );
};
