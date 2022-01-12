const env = process.env.NODE_ENV || 'development'

let config = {
    env,
    port: process.env.PORT || 3000
}

switch (env) {
    case 'prod':
    case 'production':
        config.dbUrl = process.env.MONGO_DB_URI
    case 'test':
    case 'testing':
        config.dbUrl = 'mongodb://localhost:27017/test'
        break
    case 'dev':
    case 'development':
    default:
        config.dbUrl = process.env.MONGO_DB_URI || 'mongodb://localhost:27017/dev'
}

export default config
