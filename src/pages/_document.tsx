import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/digital-numbers"
          rel="stylesheet"
        />
        <link rel="icon" href="/iconB.png" type="image/x-icon" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000" />
        <meta property="og:title" content="7007 Studio" />
        <meta property="og:site_name" content="7007" />
        <meta
          property="og:description"
          content="Revolutionizing AI with transparent,on-chain model publishing and creator compensation."
        />
        <meta property="og:url" content="https://www.7007.studio/main.png" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.7007.studio/main.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="7007.studio" />
        <meta property="twitter:url" content="https://www.7007.studio/" />
        <meta name="twitter:title" content="7007 Studio" />
        <meta
          name="twitter:description"
          content="Revolutionizing AI with transparent,on-chain model publishing and creator compensation."
        />
        <meta name="twitter:image" content="https://www.7007.studio/main.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
