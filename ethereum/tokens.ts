import bsc_mainnet from './tokensByLists/bsc-mainnet'
import polygon_mainnet from './tokensByLists/polygon-mainnet'
import eth_mainnet from './tokensByLists/eth-mainnet'

const bsc_testnet = [
    { "address": "0x6ce8dA28E2f864420840cF74474eFf5fD80E65B8", "name": "BTCB Token", "symbol": "BTCB", "decimals": 18, "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/2837.png" },
    { "address": "0xEC5dCb5Dbf4B114C9d0F65BcCAb49EC54F6A0867", "name": "Dai Token", "symbol": "DAI", "decimals": 18, logoURI: "https://raw.githubusercontent.com/compound-finance/token-list/master/assets/asset_DAI.svg" },
    { "address": "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd", "name": "USDT Token", "symbol": "USDT", "decimals": 18, "logoURI": "https://raw.githubusercontent.com/compound-finance/token-list/master/assets/asset_USDC.svg" },
    { "address": "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd", "name": "WBNB Token", "symbol": "WBNB", "decimals": 18, "logoURI": "https://raw.githubusercontent.com/compound-finance/token-list/master/assets/ctoken_wbtc.svg" },
    { "address": "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7", "name": "BUSD Token", "symbol": "BUSD", "decimals": 18, "logoURI": "https://raw.githubusercontent.com/compound-finance/token-list/master/assets/asset_USDC.svg" },
]

export default {
    [97]: bsc_testnet,
    [56]: bsc_mainnet,
    [1]: eth_mainnet,
    [137]: polygon_mainnet
}
