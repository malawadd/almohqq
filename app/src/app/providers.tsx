'use client';

import * as React from 'react';
import {
  RainbowKitProvider,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {fantom } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import {injectedWallet} from '@rainbow-me/rainbowkit/wallets';

const bitfinity= {
  id: 355113,
  name: "Bitfinity TestNet",
  network: "Bitfinity-testNet",
  nativeCurrency: {
      decimals: 18,
      name: "Bitfinity TestNet",
      symbol: "BFT",
 },
  rpcUrls: {
      default: {
          http:  ["https://testnet.bitfinity.network"],
          webSocket:  ["wss://testnet.bitfinity.network/"],
     },
      public: {
          http:  ["https://testnet.bitfinity.network"],
          webSocket:  ["wss://testnet.bitfinity.network/"],
     },
 },
  blockExplorers: {
      etherscan: {
          name: "",
          url: "",
     },
      default: {
          name: "Mode",
          url: "",
     },
 },
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [bitfinity],
  [publicProvider()]
);



const demoAppInfo = {
  appName: 'almohqq',
};

const connectors = connectorsForWallets([

  {
    groupName: 'recommended',
    wallets: [
        injectedWallet({ chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
