import React from "react";
import Desktop from "./Desktop";
import Mobile from "./Mobile";
import landing from "@/assets/landing.svg";
import landingM from "@/assets/M_landing.svg";

export default function Create() {
  const title = `creator centric`;
  const content = `ai model + aigc nft = 7007`;

  return (
    <>
      <Desktop title={title} content={content} />
      <Mobile title={title} content={content} />
    </>
  );
}
