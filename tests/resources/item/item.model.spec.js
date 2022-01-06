import { Item } from '../../../src/resources/item/item.model'
import mongoose from 'mongoose'

describe('Item model', () => {
    describe('schema', () => {
        test('name', () => {
            const name = Item.schema.obj.name
            expect(name).toEqual({
                type: String,
                required: true,
                trim: true,
                maxlength: 50
            })
        })

        test('description', () => {
            const description = Item.schema.obj.description
            expect(description).toEqual({
                type: String,
                required: true,
                trim: true
            })
        })

        test('ratingScore', () => {
            const ratingScore = Item.schema.obj.ratingScore
            expect(ratingScore).toEqual(Number)
        })

        test('category', () => {
            const category = Item.schema.obj.category
            expect(category).toEqual({
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
            })
        })

        test('stock', () => {
            const stock = Item.schema.obj.stock
            expect(stock).toEqual({
                type: Number,
                required: true
            })
        })

        test('vendor', () => {
            const vendor = Item.schema.obj.vendor
            expect(vendor).toEqual({
                type: mongoose.SchemaTypes.ObjectId,
                ref: 'vendor',
                required: true
            })
        })
    })
})
