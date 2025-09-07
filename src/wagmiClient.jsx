import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  metaMaskWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createClient } from 'wagmi';
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
      metaMaskWallet({ projectId: '15787e2949e99efd12dc95c5e03cd127', chains }),
      walletConnectWallet({ projectId: '15787e2949e99efd12dc95c5e03cd127', chains }),
    ],
  },
]);

export const config = createClient({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { chains };