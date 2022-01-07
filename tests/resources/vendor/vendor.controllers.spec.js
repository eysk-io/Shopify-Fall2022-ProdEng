import vendorCrudControllers from '../../../src/resources/vendor/vendor.controllers'
import { isFunction } from 'lodash'

describe('Vendor controllers', () => {
    test('has all crud controllers', () => {
        const crudMethods = [
            'getOneVendor',
            'getManyVendors',
            'createOneVendor',
            'updateOneVendor',
            'removeOneVendor'
        ]

        crudMethods.forEach(each => {
            expect(isFunction(vendorCrudControllers[each])).toBe(true)
        })
    })
})
