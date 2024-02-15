import React, { useContext } from "react";
import { NFTContext } from "../Provider";
import Desktop from "./HeaderDesktop";
import Mobile from "./HeaderMobile";

interface Props {
  urlPath: string;
}

export default function Header({ urlPath }: Props) {
  const { darkMode, toggleDarkMode } = useContext(NFTContext);

  return (
    <header className="z-50 h-full w-full overflow-hidden text-black transition-all dark:text-white">
      <Desktop urlPath={urlPath} darkMode={darkMode} />
      <Mobile urlPath={urlPath} darkMode={darkMode} />
    </header>
  );
}
