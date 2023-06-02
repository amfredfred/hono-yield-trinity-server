"use strict"

import { ethers } from 'ethers'
import { fmWei, toWei, priceDifference, strEqual } from '../Helpers'
import Opportunity from '../Models/opp'

import {
    EtherInstances,
    AVAILABLE_CHAINS,
    ETH_ADDRS,
    PRICE_ORACLE_ABI,
} from '../../ethereum'

import { IExecute, ITokenInfo } from '../constants/interfaces'

async function execute(props: IExecute) {
    const { path, pathMethod, pathFiltered, pathName, instance, dex, chain } = props
    let output = 0
    let input = 1;

    const amountIn = toWei(input, path?.[0]?.decimals)

    const [outputs] = await Promise.allSettled([instance.getAmountsOut(amountIn, pathFiltered)])

    const opportunity = {
        pathName,
        dex,
        chainId: chain,
        path,
        pathFiltered,
        input: input,
        amountOut: 0,
        difference: {
            potnetialProfit: 0,
            percentage: 0
        }
    }

    if (outputs.status === 'fulfilled') {
        const outValz = typeof outputs?.value === 'object' ? outputs?.value?.[outputs?.value?.length - 1] : outputs?.value
        output = Number(fmWei(outValz, path[path.length - 1].decimals))
        const { subtract: potnetialProfit, percentage } = priceDifference(output, input)
        if (pathMethod === 'T') opportunity['difference'] = { potnetialProfit, percentage }
        opportunity['amountOut'] = output
        if (output > input && pathMethod === 'T') {
            await Opportunity.updateOne({ pathName, chainId: chain }, { $set: opportunity }, { upsert: true, multi: true })
        }
        console.log({ chain, input, output, pathName: String(pathName), dex: dex?.name })
    }
    // else console.log({ "status": outputs?.status, pathName, "dex name": dex?.name, chain })

};

const PathFinder = (chain: IExecute['chain']) => {
    const baseTokens = ["MATIC", "WBNB", "WETH", "USDT", "QUICK", "UNI", "BUSD", "DAI"]
    const baseTokensList = [] as any
    const pathExceptBaseTokens = ETH_ADDRS?.[chain]?.['tokens']?.filter?.((token: ITokenInfo) => !(baseTokens?.includes(token?.symbol) && baseTokensList.push(token))) || []
    const sortedTokens = pathExceptBaseTokens?.sort((l, r) => 0.5 - Math.random())
    sortedTokens?.reverse()
    const randomTokensSelected = sortedTokens?.slice(0, Number(Math.random() * 3) + 2)

    let finalPath = randomTokensSelected?.map((token: ITokenInfo, index: number) => token) || []
    const pathMethodArray: IExecute['pathMethodArray'] = ["T", "S"]
    let pathMethod = pathMethodArray.sort(() => 0.5 - Math.random())[0]

    const executePath = baseTokensList.map((baseToken: ITokenInfo, index: number) => {
        const tempo = [] as any
        finalPath?.map((finPath, i) => {
            if (i === 0)
                finPath = baseToken
            if (pathMethod === "T")
                if (i + 1 === finalPath.length)
                    if (finalPath.length === 4) {
                        if (baseTokens.includes(finPath?.symbol)) tempo[i] = finPath
                        else tempo[i] = baseToken
                        return
                    }
            tempo[i] = finPath
            return finPath
        })
        return tempo
    })

    return { pathMethod, executePath }
}


(async => {
    setInterval(() => {
        const initial = AVAILABLE_CHAINS.map(async (chain: IExecute['chain'], index: number) => {
            if (EtherInstances?.[chain]) {
                const { pathMethod, executePath } = PathFinder(chain)
                ETH_ADDRS[chain]['dexchnages'].map((dex: IExecute['dex'], index: number) => {
                    const instance = new ethers.Contract(dex?.router, PRICE_ORACLE_ABI, EtherInstances[chain])//ETH_ADDRS[chain]['price_contract_address']
                    executePath?.map((path: IExecute['path']) => {
                        const pathName = new Array
                        const pathFiltered = new Array
                        path?.map((token: ITokenInfo) => { pathFiltered.push(token.address); pathName.push(token?.symbol) })
                        const constStructTrade: IExecute = {
                            path,
                            pathMethod,
                            pathFiltered,
                            pathName,
                            instance,
                            dex,
                            chain
                        }
                        // if (pathMethod === "T")
                            execute(constStructTrade).then(data => { }).catch(err => { })
                    })
                })
            }
        })
    }, 500)
})();


export default this