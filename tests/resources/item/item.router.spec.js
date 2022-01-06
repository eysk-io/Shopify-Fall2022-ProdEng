import router from '../../../src/resources/item/item.router'

describe('Item routes', () => {
    test('has all crud routes', () => {
        const routes = [
            { path: '/', method: 'get' },
            { path: '/', method: 'post' },
            { path: '/:id', method: 'get' },
            { path: '/:id', method: 'put' },
            { path: '/:id', method: 'delete' }
        ]

        routes.forEach(route => {
            const match = router.stack.find(
                s => s.route.path === route.path && s.route.methods[route.method]
            )
            expect(match).toBeTruthy()
        })
    })
})
