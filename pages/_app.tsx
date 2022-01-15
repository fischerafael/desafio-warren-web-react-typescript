import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { ModalProvider } from "../src/hook/useModal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Warren Transações</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ChakraProvider>
  );
}

export default MyApp;
