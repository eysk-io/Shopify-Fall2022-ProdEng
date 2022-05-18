import { Product } from '../../../src/resources/product/product.model'
import {
    getAllProducts,
    createOneProduct,
    getOneProduct,
    removeOneProduct,
    updateOneProduct
} from '../../../src/utils/crud/product'
import * as dbHandler from '../../mock-db.setup'

describe('Product crud methods', () => {
    beforeAll(async () => {
        await dbHandler.connect()
    })

    afterEach(async () => {
        await dbHandler.clearDatabase()
    })

    afterAll(async () => {
        await dbHandler.closeDatabase()
    })

    describe('getAllProducts', () => {
        test('get a list of all products', async () => {
            await Product.create([
                {
                    name: 'test-product0',
                    description: 'my test product0',
                    price: 1.00,
                    stock: 0,
                },
                {
                    name: 'test-product1',
                    description: 'my test product1',
                    price: 2.10,
                    stock: 1000,
                },
                {
                    name: 'test-product2',
                    description: 'my test product2',
                    price: 3.20,
                    stock: 2000,
                }
            ])

            const req = {}
            const res = {
                status(status) {
                    expect(status).toBe(200)
                    return this
                },
                json(result) {
                    expect(result.data).toHaveLength(3)
                    result.data.forEach((doc, index) => {
                        expect(doc.name).toBe(`test-product${index}`)
                        expect(doc.description).toBe(`my test product${index}`)
                        expect(doc.price).toBe(index * 1.1 + 1)
                        expect(doc.city).toBe('Vancouver')
                        expect(doc.stock).toBe(index * 1000)
                    })
                }
            }

            await getAllProducts(Product)(req, res)

            const numProducts = 3
            const numProperties = 5
            expect.assertions(numProducts * numProperties + 2)
        })
    })

    describe('createOneProduct', () => {
        test('create a new product', async () => {
            const req = {
                body: {
                    name: 'My Test Product',
                    description: 'my test product',
                    price: 1.00,
                    city: 'Toronto',
                    stock: 1000
                },
            }

            const res = {
                status(status) {
                    expect(status).toBe(201)
                    return this
                },
                json(result) {
                    expect(result.data.name).toBe('my-test-product')
                    expect(result.data.description).toBe(req.body.description)
                    expect(result.data.price).toBe(req.body.price)
                    expect(result.data.city).toBe(req.body.city)
                    expect(result.data.stock).toBe(req.body.stock)
                }
            }

            await createOneProduct(Product)(req, res)
            expect.assertions(6)
        })

        test('returns 400 if product already exists', async () => {
            await Product.create(
                {
                    name: 'my-test-product',
                    description: 'my test product0',
                    price: 1.00,
                    stock: 0,
                }
            )

            const req = {
                body: {
                    name: 'My Test Product',
                    description: 'my test product',
                    price: 1.00,
                    city: 'Toronto',
                    stock: 1000
                },
            }

            const res = {
                status(status) {
                    expect(status).toBe(400)
                    return this
                },
                end() {
                    expect(true).toBe(true)
                }
            }

            await createOneProduct(Product)(req, res)
            expect.assertions(2)
        })
    })

    describe('getOneProduct', () => {
        test('retrieves one product by product name', async () => {
            const product = await Product.create(
                {
                    name: 'my-test-product',
                    description: 'my test product0',
                    price: 1.00,
                    stock: 0,
                    city: 'Toronto',
                }
            )

            const req = {
                params: { productName: product.name }
            }

            const res = {
                status(status) {
                    expect(status).toBe(200)
                    return this
                },
                json(result) {
                    expect(result.data.name).toBe(product.name)
                    expect(result.data.description).toBe(product.description)
                    expect(result.data.price).toBe(product.price)
                    expect(result.data.city).toBe(product.city)
                    expect(result.data.stock).toBe(product.stock)
                }
            }

            await getOneProduct(Product)(req, res)
            expect.assertions(6)
        })

        test('returns 400 if product is not found', async () => {
            await Product.create(
                {
                    name: 'my-test-product',
                    description: 'my test product0',
                    price: 1.00,
                    stock: 0,
                    city: 'Toronto',
                }
            )

            const req = {
                params: { productName: 'no-product' }
            }

            const res = {
                status(status) {
                    expect(status).toBe(400)
                    return this
                },
                end() {
                    expect(true).toBe(true)
                }
            }

            await getOneProduct(Product)(req, res)
            expect.assertions(2)
        })
    })

    describe('removeOneProduct', () => {
        test('removes product by product name', async () => {
            const product = await Product.create(
                {
                    name: 'my-test-product',
                    description: 'my test product0',
                    price: 1.00,
                    stock: 0,
                    city: 'Toronto',
                }
            )

            const req = {
                params: { productName: product.name }
            }

            const res = {
                status(status) {
                    expect(status).toBe(200)
                    return this
                },
                json(result) {
                    expect(result.data.name).toBe(product.name)
                    expect(result.data.description).toBe(product.description)
                    expect(result.data.price).toBe(product.price)
                    expect(result.data.city).toBe(product.city)
                    expect(result.data.stock).toBe(product.stock)
                }
            }

            await removeOneProduct(Product)(req, res)
            expect.assertions(6)
        })

        test('returns 400 if product is not found', async () => {
            await Product.create(
                {
                    name: 'my-test-product',
                    description: 'my test product0',
                    price: 1.00,
                    stock: 0,
                    city: 'Toronto',
                }
            )

            const req = {
                params: { productName: 'no-product' }
            }

            const res = {
                status(status) {
                    expect(status).toBe(400)
                    return this
                },
                end() {
                    expect(true).toBe(true)
                }
            }

            await removeOneProduct(Product)(req, res)
            expect.assertions(2)
        })
    })

    describe('updateOneProduct', () => {
        test('updates product', async () => {
            const product = await Product.create(
                {
                    name: 'my-test-product',
                    description: 'my test product',
                    price: 1.00,
                    stock: 0,
                    city: 'Toronto',
                }
            )

            const update = {
                name: 'My Test Product',
                description: 'my new description',
                price: 2.00,
                city: 'Toronto',
                stock: 2000,
            }

            const req = {
                body: update,
                params: { productName: product.name }
            }

            const res = {
                status(status) {
                    expect(status).toBe(200)
                    return this
                },
                json(result) {
                    expect(result.data.name).toBe('my-test-product')
                    expect(result.data.description).toBe(update.description)
                    expect(result.data.price).toBe(update.price)
                    expect(result.data.city).toBe(update.city)
                    expect(result.data.stock).toBe(update.stock)
                }
            }

            await updateOneProduct(Product)(req, res)
            expect.assertions(6)
        })

        test('returns 400 if product is not found', async () => {
            await Product.create(
                {
                    name: 'my-test-product',
                    description: 'my test product',
                    price: 1.00,
                    stock: 0,
                    city: 'Toronto',
                }
            )

            const update = {
                name: 'My Test Product',
                description: 'my new description',
                price: 2.00,
                city: 'Toronto',
                stock: 2000,
            }

            const req = {
                body: update,
                params: { productName: 'no-product' }
            }

            const res = {
                status(status) {
                    expect(status).toBe(400)
                    return this
                },
                end() {
                    expect(true).toBe(true)
                }
            }

            await updateOneProduct(Product)(req, res)
            expect.assertions(2)
        })
    })
})
