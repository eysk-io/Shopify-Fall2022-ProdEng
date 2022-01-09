import { Product } from '../../../src/resources/product/product.model'
import { Vendor } from '../../../src/resources/vendor/vendor.model'
import {
    getAllProducts,
    getAllProductsByVendor
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
            const vendor = await Vendor.create(
                { name: 'test-vendor0', description: 'my test vendor0' }
            )

            await Product.create([
                {
                    name: 'test-product0',
                    description: 'my test product0',
                    ratingScore: 0,
                    numRatingScores: 0,
                    price: 1.00,
                    stock: 0,
                    vendor: vendor.name
                },
                {
                    name: 'test-product1',
                    description: 'my test product1',
                    ratingScore: 100,
                    numRatingScores: 10,
                    price: 2.10,
                    stock: 1000,
                    vendor: vendor.name
                },
                {
                    name: 'test-product2',
                    description: 'my test product2',
                    ratingScore: 200,
                    numRatingScores: 20,
                    price: 3.20,
                    stock: 2000,
                    vendor: vendor.name
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
                        expect(doc.ratingScore).toBe(index * 100)
                        expect(doc.numRatingScores).toBe(index * 10)
                        expect(doc.price).toBe(index * 1.1 + 1)
                        expect(doc.category).toBe('uncategorized')
                        expect(doc.stock).toBe(index * 1000)
                        expect(doc.vendor.toString()).toBe(vendor.name.toString())
                    })
                }
            }

            await getAllProducts(Product)(req, res)

            const numProducts = 3
            const numProperties = 8
            expect.assertions(numProducts * numProperties + 2)
        })
    })

    describe('getAllProductsByVendor', () => {
        test('get a list of all products by vendor', async () => {
            const testVendors = await Vendor.create([
                { name: 'test-vendor0', description: 'my test vendor0' },
                { name: 'test-vendor1', description: 'my test vendor1' }
            ])

            await Product.create([
                {
                    name: 'test-product0',
                    description: 'my test product0',
                    ratingScore: 0,
                    numRatingScores: 0,
                    price: 1.00,
                    stock: 0,
                    vendor: testVendors[0].name
                },
                {
                    name: 'test-product1',
                    description: 'my test product1',
                    ratingScore: 100,
                    numRatingScores: 10,
                    price: 2.10,
                    stock: 1000,
                    vendor: testVendors[0].name
                },
                {
                    name: 'test-product2',
                    description: 'my test product2',
                    ratingScore: 200,
                    numRatingScores: 20,
                    price: 3.20,
                    stock: 2000,
                    vendor: testVendors[1].name
                }
            ])

            const req = {
                params: {
                    vendorName: testVendors[0].name
                }
            }

            const res = {
                status(status) {
                    expect(status).toBe(200)
                    return this
                },
                json(result) {
                    expect(result.data).toHaveLength(2)
                    result.data.forEach((doc, index) => {
                        expect(doc.name).toBe(`test-product${index}`)
                        expect(doc.description).toBe(`my test product${index}`)
                        expect(doc.ratingScore).toBe(index * 100)
                        expect(doc.numRatingScores).toBe(index * 10)
                        expect(doc.price).toBe(index * 1.1 + 1)
                        expect(doc.category).toBe('uncategorized')
                        expect(doc.stock).toBe(index * 1000)
                        expect(doc.vendor.toString()).toBe(testVendors[0].name.toString())
                    })
                }
            }

            await getAllProductsByVendor(Vendor, Product)(req, res)

            const numProducts = 2
            const numProperties = 8
            expect.assertions(numProducts * numProperties + 2)
        })
        test('returns 400 if no vendor is found', async () => {
            const req = {
                params: {
                    vendorName: 'test-vendor'
                }
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

            await getAllProductsByVendor(Vendor, Product)(req, res)
            expect.assertions(2)
        })
    })
})
