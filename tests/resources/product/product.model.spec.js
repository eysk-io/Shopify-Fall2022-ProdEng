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

        test('price', () => {
            const price = Product.schema.obj.price
            expect(price).toEqual({
                type: Number,
                required: true
            })
        })

        test('city', () => {
            const city = Product.schema.obj.city
            expect(city).toEqual({
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
