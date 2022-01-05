import express from 'express'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import path from 'path'

export const app = express()
const PORT = '3000'

app.disable('x-powered-by')
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, './views/index.html'))
})

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})
