import controllers from '../../../src/resources/item/item.controllers'
import { isFunction } from 'lodash'

describe('Item controllers', () => {
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
