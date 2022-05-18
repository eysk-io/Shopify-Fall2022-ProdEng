import router from '../../../src/resources/product/product.router'

describe('Product router', () => {
    test('has all crud routes', () => {
        const routes = [
            { path: '/', method: 'get' },
            { path: '/', method: 'post' },
            { path: '/:productName', method: 'get' },
            { path: '/:productName', method: 'put' },
            { path: '/:productName', method: 'delete' }
        ]

        routes.forEach(route => {
            const match = router.stack.find(
                s => s.route.path === route.path && s.route.methods[route.method]
            )
            expect(match).toBeTruthy()
        })
    })
})
