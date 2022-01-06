import mongoose from 'mongoose'
import config from '../config'

export const connect = () => {
    return mongoose.connect(
        config.dbUrl,
        { useNewUrlParser: true }
    )
}
