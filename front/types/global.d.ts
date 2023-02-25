import type { MetaMaskInpageProvider } from '@metamask/providers'
import type { providers } from 'ethers'

type ExternalProvider = MetaMaskInpageProvider & providers.ExternalProvider

declare global {
  interface Window {
    ethereum?: ExternalProvider
  }
}
