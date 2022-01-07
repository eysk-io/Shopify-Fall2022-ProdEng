import controllers from '../../../src/resources/product/product.controllers'
import { isFunction } from 'lodash'

describe('Product controllers', () => {
    test('has all crud controllers', () => {
        const crud = [
            'getOne',
            'getMany',
            'createOne',
            'removeOne',
            'updateOne',
        ]

        crud.forEach(each => {
            expect(isFunction(controllers[each])).toBe(true)
        })
    })
})
