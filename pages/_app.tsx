import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { ModalProvider } from "../src/hook/useModal";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ChakraProvider>
  );
}

export default MyApp;
