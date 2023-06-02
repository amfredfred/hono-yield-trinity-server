import { ethers } from "ethers"


// precising/to fixed decimals places  
export const precise = (val: string | number = 0, decimals: undefined | number = 4): string => {
    let tofixed = Number(val ?? 0).toFixed(decimals + 1)
    let splitted0 = String(tofixed).split('.')[1]
    return tofixed.split('.')[0].concat('.').concat(splitted0.slice(0, decimals))
}
// to uppercase
export const toUpper = (val: any) => String(String(val)?.toUpperCase())

// to lowecasse
export const toLower = (val: string) => String(val?.toLowerCase())

// is equal
export const strEqual = (val: string | undefined, val1: string | undefined): boolean => toUpper(val) === toUpper(val1)

// wait/sleep
export const wait = /*@devfred*/ async (seconds?: number) => new Promise((resolved) => setTimeout(() => resolved('continue'), Number(seconds) * 1000 || 1000))

// fromart numbers in k`s
export const NumCompact = (val: number | string): string => Intl.NumberFormat("en", { notation: "compact" }).format(Number(val))

// percentage of off
export const percentageof = (perc: number | string, num: number | string): number => Number(num) * (Number(perc) / 100)

// from wei
export const fmWei = (val: string | number, decimals: undefined | string | number = 18): string => {
    if (!val) return precise(0)
    return ethers.formatUnits(String(val), decimals)
}

// to wei
export const toWei = (val: string | number, decimals: any = 18): ethers.BigNumberish | number => {
    if (!val || !decimals) return ethers.parseUnits(String(0), 18)
    return ethers.parseUnits(String(val), decimals)
}

// subtraction
export const sub = (val: number | string, val1: number | string): number => Number(val) - Number(val1)

// price difference
export const priceDifference = (val: string | number, val2: string | number) => {
    const oldp = Number(val)
    const newp = Number(val2)
    const subtract =  sub(oldp, newp);
    const addition = (oldp + newp) / 2
    const division = subtract / addition
    const percentage = (division * 100)
    return { subtract, percentage }
}