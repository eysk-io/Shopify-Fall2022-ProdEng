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
    ratingScore: Number,
    numRatingScores: Number,
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: [
            'books',
            'video games',
            'electronics',
            'clothing',
            'uncategorized'
        ],
        default: 'uncategorized'
    },
    stock: {
        type: Number,
        required: true
    }
}, { timestamps: true }
)

productSchema.index({ name: 1 }, { unique: true })

export const Product = mongoose.model('product', productSchema)
