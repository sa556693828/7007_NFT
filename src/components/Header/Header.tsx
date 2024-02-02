import React from "react";
import Desktop from "./HeaderDesktop";
import Mobile from "./HeaderMobile";

interface Props {
  urlPath: string;
}

export default function Header({ urlPath }: Props) {
  return (
    <header className="z-50 h-full w-full overflow-hidden transition-all">
      <Desktop urlPath={urlPath} />
      <Mobile urlPath={urlPath} />
    </header>
  );
}
