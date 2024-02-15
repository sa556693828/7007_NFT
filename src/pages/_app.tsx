import BaseLayout from "@/components/Layout/BasicLayout";
import { NFTProvider } from "@/components/Provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NFTProvider>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </NFTProvider>
    </>
  );
}
