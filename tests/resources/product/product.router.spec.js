import router from '../../../src/resources/product/product.router'

describe('Product router', () => {
    test('has all crud routes', () => {
        const routes = [
            { path: '/', method: 'get' },
            { path: '/:vendorName', method: 'get' },
            { path: '/:vendorName', method: 'post' },
            { path: '/:vendorName/:productName', method: 'get' },
            { path: '/:vendorName/:productName', method: 'put' },
            { path: '/:vendorName/:productName', method: 'delete' }
        ]

        routes.forEach(route => {
            const match = router.stack.find(
                s => s.route.path === route.path && s.route.methods[route.method]
            )
            expect(match).toBeTruthy()
        })
    })
})
