import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true,
        enum: [
            'Vancouver',
            'Toronto',
            'Calgary',
            'Waterloo',
            'Seattle'
        ],
        default: 'Vancouver'
    },
    stock: {
        type: Number,
        required: true
    },
    weather: {
        type: String,
        trim: true
    },
}, { timestamps: true }
)

productSchema.index({ name: 1 }, { unique: true })

export const Product = mongoose.model('product', productSchema)
