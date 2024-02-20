import BaseLayout from "@/components/Layout/BasicLayout";
import { NFTProvider } from "@/components/Provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <NFTProvider>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </NFTProvider>
  );
}
