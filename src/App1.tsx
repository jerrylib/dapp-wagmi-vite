import { Web3Button } from '@web3modal/react'
import { useAccount } from 'wagmi'

import { Account } from './components'

export function App1() {
  const { isConnected } = useAccount()

  console.log('App1')
  return (
    <>
      <h1>wagmi111 + Web3Modal + Vite</h1>

      <Web3Button />

      {isConnected && <Account />}
    </>
  )
}
