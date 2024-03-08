import "@/styles/globals.css";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicContextProvider, FilterWallets } from "@dynamic-labs/sdk-react-core";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: '', //get the Id here:https://app.dynamic.xyz/dashboard/developer/api
        walletConnectors: [EthereumWalletConnectors],
        siweStatement: "Sign in to Pingu's heart",
        walletsFilter: FilterWallets(["metamask", "trust", "rainbow"]),
        //walletsFilter: FilterChain('EVM'),


      }}>
      <Component {...pageProps} />
    </DynamicContextProvider>
  )
}
