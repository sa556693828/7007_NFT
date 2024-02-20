import React, { useContext } from "react";
import { NFTContext } from "../Provider";
import Desktop from "./HeaderDesktop";
import Mobile from "./HeaderMobile";
import { socialLink } from "@/constants/menuList";

interface Props {
  urlPath: string;
}

export default function Header({ urlPath }: Props) {
  const { darkMode, toggleDarkMode } = useContext(NFTContext);
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <header className="z-50 h-full w-full overflow-hidden text-black transition-all dark:text-white">
      <Desktop
        urlPath={urlPath}
        darkMode={darkMode}
        socialLink={socialLink}
        openLink={openLink}
      />
      <Mobile
        urlPath={urlPath}
        darkMode={darkMode}
        socialLink={socialLink}
        openLink={openLink}
      />
    </header>
  );
}
