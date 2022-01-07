import vendorRouter from '../../../src/resources/vendor/vendor.router'

describe('Vendor router', () => {
    test('has all crud routes', () => {
        const routes = [
            { path: '/', method: 'get' },
            { path: '/', method: 'post' },
            { path: '/:vendorName', method: 'get' },
            { path: '/:vendorName', method: 'put' },
            { path: '/:vendorName', method: 'delete' }
        ]

        routes.forEach(route => {
            const match = vendorRouter.stack.find(
                s => s.route.path === route.path && s.route.methods[route.method]
            )
            expect(match).toBeTruthy()
        })
    })
})
