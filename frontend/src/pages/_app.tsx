import BaseLayout from "@/components/Layout/BasicLayout";
import { NFTProvider } from "@/components/Provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NFTProvider>
      <BaseLayout>
        <Toaster
          toastOptions={{
            style: {
              background: "#0F0F0F",
              paddingTop: "6px",
              paddingBottom: "6px",
              paddingRight: "10px",
              paddingLeft: "10px",
              border: "1px solid #B4FF78",
              color: "#B4FF78",
              fontSize: "12px",
              fontFamily: "Digital Numbers",
            },
          }}
        />

        <Component {...pageProps} />
      </BaseLayout>
    </NFTProvider>
  );
}
