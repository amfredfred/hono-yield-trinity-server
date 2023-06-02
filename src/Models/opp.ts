import mongoose from 'mongoose'

const OpportunitySchema = new mongoose.Schema({
    pathName: { type: Array },
    dex: { type: Object },
    chainId: { type: Number },
    amountIn: { type: Number },
    amountOut: { type: Number },
    path: { type: Object },
    pathFiltered: { type: Object },
    difference: { type: Object }
}, { timestamps: true })

export default mongoose.model('Opportunity', OpportunitySchema)