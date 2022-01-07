import express from 'express'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import path from 'path'
import productRouter from './resources/product/product.router'
import config from './config'
import { connect } from './utils/db'

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

export const startServer = async () => {
    try {
        await connect()
        app.listen(config.port, () => {
            console.log(`Running on http://localhost:${config.port}`)
        })
    } catch (e) {
        console.error(e)
    }
}
