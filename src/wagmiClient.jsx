import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  metaMaskWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains } from 'wagmi';
import { createConfig } from '@wagmi/core';
import { publicProvider } from 'wagmi/providers/public';
import { coreDao } from 'wagmi/chains';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [coreDao],
  [publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ projectId: 'a7f1c2e8d9b3f4a5c6e7d8f9a0b1c2d3', chains }),
      walletConnectWallet({ projectId: 'a7f1c2e8d9b3f4a5c6e7d8f9a0b1c2d3', chains }),
    ],
  },
]);

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { chains };