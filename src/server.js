import express from 'express'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import path from 'path'
import productRouter from './resources/product/product.router'
import vendorRouter from './resources/vendor/vendor.router'
import config from './config'
import { connect } from './utils/db'
import { addSampleVendors } from './utils/add_sample_vendors'

export const app = express()

app.disable('x-powered-by')
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (_req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.use('/api/product', productRouter)
app.use('/api/vendor', vendorRouter)

export const startServer = async () => {
    try {
        await connect()

        // sample vendors added for demo-purposes
        await addSampleVendors()

        app.listen(config.port, () => {
            console.log(`Running on http://localhost:${config.port}`)
        })
    } catch (e) {
        console.error(e)
    }
}
