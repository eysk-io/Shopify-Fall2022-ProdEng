import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
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
            'uncategoried'
        ],
        default: 'uncategorized'
    },
    stock: {
        type: Number,
        required: true
    },
    vendor: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'vendor',
        required: true
    }
}, { timestamps: true }
)

itemSchema.index({ vendor: 1, name: 1 }, { unique: true })

export const Item = mongoose.model('item', itemSchema)
