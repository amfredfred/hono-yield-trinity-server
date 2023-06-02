import dayjs from 'dayjs'
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

const OpportunityResource = (post: any) => ({
    difference: post?.difference,
    dex: post?.dex,
    path: post?.path,
    paths: post?.path,
    pathFiltered: post?.pathFiltered,
    pathName: post?.pathName,
    amountIn: post?.amountIn,
    amountOut: post?.amountOut,
    chainId: post?.chainId,
    "createdAt": post?.createdAt ? { relative: dayjs(post?.createdAt)/*.fromNow()*/, absolute: post?.createdAt } : '',
    "updatedAt": post?.createdAt ? { relative: dayjs(post?.updatedAt)/*.fromNow()*/, absolute: post?.createdAt } : ''
})

const OpportunityCollection = (posts: any = []) => posts?.map((post:any) => OpportunityResource(post))

export { OpportunityResource, OpportunityCollection }