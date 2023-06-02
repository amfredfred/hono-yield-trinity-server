import { IAddresses, IETH_ADDRESSES } from '../src/constants/interfaces'
import tokens from './tokens'


const ETH_ADDRS: IETH_ADDRESSES = {
    [1]/*ETH_MAINNET*/: {
        price_contract_address: "",
        weth_contract_address: "",
        tokens: tokens[1],
        dexchnages: [
            // {
            //     router: "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
            //     factory: "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
            //     name: 'uniswap',
            // },
            // {
            //     router: "0xEfF92A263d31888d860bD50809A8D171709b7b1c",
            //     factory: "0x1097053Fd2ea711dad45caCcc45EfF7548fCB362",
            //     name: 'pancakeswap',
            // },
            // {
            //     router: "0x5f509a3C3F16dF2Fba7bF84dEE1eFbce6BB85587",
            //     factory: "0xBAe5dc9B19004883d0377419FeF3c2C8832d7d7B",
            //     name: 'apeswap',
            // },
        ]
    },
    [137]/*POLYGON_MAINNET*/: {
        price_contract_address: "0x7f379eC5914476D919E1F38bC904FC07A49b3A2D",
        weth_contract_address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
        tokens: tokens[137],
        dexchnages: [
            {
                router: "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff",
                factory: "0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32",
                name: 'quickswap',
            },
            {
                router: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
                factory: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
                name: 'sushiswap',
            }, {
                router: "0xC0788A3aD43d79aa53B09c2EaCc313A787d1d607",
                factory: "0xCf083Be4164828f00cAE704EC15a36D711491284",
                name: 'apeswap',
            },
        ]
    },
    97/*BSC_TESTNET*/: {
        price_contract_address: "0x0Ac4C22AefAB3C8b0A9ca7A0Dc77E825709A0Cb7",
        weth_contract_address: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
        tokens: tokens[97],
        dexchnages: [
            {
                router: "0xD99D1c33F9fC3444f8101754aBC46c52416550D1",
                factory: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
                name: 'uniswap',
            },
            {
                router: "0x9ac64cc6e4415144c455bd8e4837fea55603e5c3",
                factory: "0x6725f303b657a9451d8ba641348b6761a6cc7a17",
                name: 'pancakeswap',
            },
        ]
    },
    [56]/*BSC_MAINNET*/: {
        price_contract_address: "0x7f379eC5914476D919E1F38bC904FC07A49b3A2D",
        weth_contract_address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        tokens: tokens[56],
        dexchnages: [
            {
                router: "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
                factory: "0xc35DADB65012eC5796536bD9864eD8773aBc74C4",
                name: 'sushiswap',
            },
            {
                router: "0x10ED43C718714eb63d5aA57B78B54704E256024E",
                factory: "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73",
                name: 'pancakeswap',
            },
            {
                router: "0xcF0feBd3f17CEf5b47b0cD257aCf6025c5BFf3b7",
                factory: "0x0841BD0B734E4F5853f0dD8d7Ea041c241fb0Da6",
                name: 'apeswap',
            },
        ]
    },
}

export { ETH_ADDRS } 
