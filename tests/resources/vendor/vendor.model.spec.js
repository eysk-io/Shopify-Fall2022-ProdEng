import { Vendor } from '../../../src/resources/vendor/vendor.model'

describe('Vendor model', () => {
    describe('schema', () => {
        test('name', () => {
            const name = Vendor.schema.obj.name
            expect(name).toEqual({
                type: String,
                required: true,
                trim: true,
                maxlength: 50
            })
        })

        test('description', () => {
            const description = Vendor.schema.obj.description
            expect(description).toEqual({
                type: String,
                required: true,
                trim: true
            })
        })
    })
})
