import { useRouter } from "next/router";
import React, { useState } from "react";
import Header from "../Header/Header";
// import LoadingPage from "../LoadingPage/LoadingPage";
//   import Loading from "../../pages/Loading";
import Footer from "../Footer/Footer";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const isMobile = useBreakpointValue({ base: true, lg: false });
  const urlPath = useRouter().pathname;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      <Header urlPath={urlPath} />
      <main className="min-h-[100dvh] max-w-[100vw]">{children}</main>
      <Footer urlPath={urlPath} />
    </>
  );
}
