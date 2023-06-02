export interface IChains {
    networks: "ETH_MAINNET" | "BSC_MAINNET" | "BSC_MAINNET" | "POLYGON_MAINNET"
    chains: {
        [key: string]: number,
    }
}

export interface ITokenInfo {
    logoURI: string
    address: string
    name: string
    symbol: string
    decimals: number
}

export interface IExecute {
    path: ITokenInfo[]
    paths?: ITokenInfo[]
    pathMethod: string
    pathMethodArray?: ["T", "S"]
    pathFiltered: string[]
    pathName: string[]
    instance: any
    dex: {
        name: string,
        router: string,
        factory: string
    }
    chain: number
}

export interface IAddresses {
    price_contract_address: string
    weth_contract_address: string
    tokens: ITokenInfo[]
    dexchnages: IExecute['dex'][]
}

export interface IETH_ADDRESSES {
    [key: number]: IAddresses
}
