import { Product } from '../../../src/resources/product/product.model'

describe('Product model', () => {
    describe('schema', () => {
        test('name', () => {
            const name = Product.schema.obj.name
            expect(name).toEqual({
                type: String,
                required: true,
                trim: true,
                maxlength: 50
            })
        })

        test('description', () => {
            const description = Product.schema.obj.description
            expect(description).toEqual({
                type: String,
                required: true,
                trim: true
            })
        })

        test('ratingScore', () => {
            const ratingScore = Product.schema.obj.ratingScore
            expect(ratingScore).toEqual(Number)
        })

        test('category', () => {
            const category = Product.schema.obj.category
            expect(category).toEqual({
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
            })
        })

        test('stock', () => {
            const stock = Product.schema.obj.stock
            expect(stock).toEqual({
                type: Number,
                required: true
            })
        })
    })
})
