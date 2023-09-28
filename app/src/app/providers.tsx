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

const rsk= {
  id: 31,
  name: "RSK Testnet",
  network: "RSK-testnet",
  nativeCurrency: {
      decimals: 18,
      name: "RSK Testnet",
      symbol: "tRBTC",
 },
  rpcUrls: {
      default: {
          http:  ["https://public-node.testnet.rsk.co"],
          webSocket:  ["wss://public-node.testnet.rsk.co"],
     },
      public: {
          http:  ["https://public-node.testnet.rsk.co"],
          webSocket:  ["wss://public-node.testnet.rsk.co"],
     },
 },
  blockExplorers: {
      etherscan: {
          name: "Mode",
          url: "https://explorer.testnet.rsk.co",
     },
      default: {
          name: "Mode",
          url: "https://explorer.testnet.rsk.co",
     },
 },
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [rsk],
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