import { ethers } from 'ethers'
import { ETH_ADDRS } from './addresses'
import PRICE_ORACLE_ABI from '../src/constants/abi'
import { IChains } from '../src/constants/interfaces'
// const tokens  = require('./tokens')


const networks: IChains['chains'] = {
    BSC_TESTNET: 97,
    ETH_MAINNET: 1,
    BSC_MAINNET: 56,
    POLYGON_MAINNET: 137
}

const rpcs = {
    [97]: "https://rpc.ankr.com/bsc_testnet_chapel/",
    [1]: "https://rpc.ankr.com/eth/",
    [56]: "https://rpc.ankr.com/bsc/",
    [137]: "https://rpc.ankr.com/polygon/"
}

const EtherInstances: { [key: number]: any } = {
    [56]: new ethers.JsonRpcProvider('https://rpc.ankr.com/bsc'),
    // [97]: new ethers.JsonRpcProvider('https://rpc.ankr.com/bsc_testnet_chapel'),
    // 1: new ethers.AnkrProvider(),
    [137]: new ethers.JsonRpcProvider('https://rpc.ankr.com/polygon')
}

const AVAILABLE_CHAINS = [networks.POLYGON_MAINNET, networks.BSC_MAINNET, networks.ETH_MAINNET, networks.BSC_TESTNET];

export {
    ETH_ADDRS,
    PRICE_ORACLE_ABI,
    AVAILABLE_CHAINS,
    networks,
    rpcs,
    EtherInstances,
}

