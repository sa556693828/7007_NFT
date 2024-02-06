import React, { useContext } from "react";
import { useRouter } from "next/router";
import yt from "@/assets/ICONS/footer_yt.svg";
import x from "@/assets/ICONS/footer_x.svg";
import ig from "@/assets/ICONS/footer_ig.svg";
import Image from "next/image";
import Desktop from "./FooterDesktop";
import Mobile from "./FooterMobile";

interface Props {
  urlPath: string;
}

export default function Footer({ urlPath }: Props) {
  const openLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <footer className="flex w-full bg-bgWhite">
      <Desktop />
      {/* <Mobile /> */}
    </footer>
  );
}
