import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import mongoose from 'mongoose'
import { OpportunityCollection } from './Responses/opportunities'
import opportunities from './Models/opp'
import { cors } from 'hono/cors'

require('dotenv').config()
const app = new Hono()

app.use("*", cors?.())

app.options("*", (c) => c.text('', 204))

mongoose.connect(process.env.DB_URL || '')
const DB = mongoose.connection
DB.on('error', error => console.log('DB |:| Connection Errored!'))
DB.once('open', opened => console.log(`DB |:| Connected Successfully! ${process.env.DB_URL}`));


app.post('/opps', async (req, res) => {
    const { chainId } = await req?.req?.json()
    const query = { chainId }
    console.log(chainId)
    const available = opportunities.find(query)
    const [allOpportunities] = await Promise.all([
        available.sort([['updatedAt', 'descending']]).exec()
    ])
    const etherscrape = OpportunityCollection(allOpportunities.slice(0, 6))
    return req.json(etherscrape)
})

require('./Watchers/opp-watcher')

serve({
    fetch: app.fetch,
    port: 1000
})
