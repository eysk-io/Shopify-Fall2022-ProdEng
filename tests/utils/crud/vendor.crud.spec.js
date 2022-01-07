import { Vendor } from '../../../src/resources/vendor/vendor.model'
import {
    createOneVendor,
    getManyVendors,
    getOneVendor,
    updateOneVendor,
    removeOneVendor
} from '../../../src/utils/crud/vendor'
import * as dbHandler from '../../mock-db.setup'

describe('Vendor crud methods', () => {
    beforeAll(async () => {
        await dbHandler.connect()
    })

    afterEach(async () => {
        await dbHandler.clearDatabase()
    })

    afterAll(async () => {
        await dbHandler.closeDatabase()
    })

    describe('createOneVendor', () => {
        test('create new vendor', async () => {
            const req = {
                body: {
                    name: 'Test vendor',
                    description: 'my test vendor'
                }
            }

            const res = {
                status(status) {
                    expect(status).toBe(201)
                    return this
                },
                json(results) {
                    expect(results.data.name).toBe('test-vendor')
                    expect(results.data.description).toBe(req.body.description)
                }
            }

            await createOneVendor(Vendor)(req, res)
            expect.assertions(3)
        })

        test('return 400 status creating vendor that already exists', async () => {
            await Vendor.create({
                name: 'test-vendor',
                description: 'my test vendor'
            })

            const req = {
                body: {
                    name: 'Test vendor',
                    description: 'my duplicate test vendor'
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

            await createOneVendor(Vendor)(req, res)
            expect.assertions(2)
        })
    })

    describe('getManyVendors', () => {
        test('retrieves data for all vendors', async () => {
            await Vendor.create([
                { name: 'test-vendor0', description: 'my test vendor0' },
                { name: 'test-vendor1', description: 'my test vendor1' },
                { name: 'test-vendor2', description: 'my test vendor2' },
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
                        expect(doc.name).toBe(`test-vendor${index}`)
                        expect(doc.description).toBe(`my test vendor${index}`)
                    })
                }
            }

            await getManyVendors(Vendor)(req, res)
            expect.assertions(8)
        })
    })

    describe('getOneVendor', () => {
        test('retrieves one vendor', async () => {
            const vendor = await Vendor.create({
                name: 'test-vendor',
                description: 'my test vendor'
            })

            const req = {
                params: {
                    vendorName: vendor.name
                }
            }

            const res = {
                status(status) {
                    expect(status).toBe(200)
                    return this
                },
                json(result) {
                    expect(result.data._id.toString()).toBe(vendor._id.toString())
                    expect(result.data.name).toBe('test-vendor')
                }
            }

            await getOneVendor(Vendor)(req, res)
            expect.assertions(3)
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

            await getOneVendor(Vendor)(req, res)
            expect.assertions(2)
        })
    })

    describe('updateOneVendor', () => {
        test('finds vendor by name and updates it', async () => {
            const vendor = await Vendor.create({
                name: 'test-vendor',
                description: 'my test vendor'
            })

            const update = {
                name: 'updated-test-vendor',
                description: 'my updated description'
            }

            const req = {
                params: { vendorName: vendor.name },
                body: update
            }

            const res = {
                status(status) {
                    expect(status).toBe(200)
                    return this
                },
                json(results) {
                    expect(`${results.data._id}`).toBe(`${vendor._id}`)
                    expect(results.data.name).toBe(update.name)
                    expect(results.data.description).toBe(update.description)
                }
            }

            await updateOneVendor(Vendor)(req, res)
            expect.assertions(4)
        })

        test('returns 400 if no vendor is found', async () => {
            const update = {
                name: 'updated-test-vendor',
                description: 'my updated description'
            }

            const req = {
                params: { vendorName: 'test-vendor' },
                body: update
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

            await updateOneVendor(Vendor)(req, res)
            expect.assertions(2)
        })
    })

    describe('removeOneVendor', () => {
        test('removes vendor by name', async () => {
            const vendor = await Vendor.create({
                name: 'test-vendor',
                description: 'my test vendor'
            })

            const req = {
                params: {
                    vendorName: 'test-vendor'
                }
            }

            const res = {
                status(status) {
                    expect(status).toBe(200)
                    return this
                },
                json(results) {
                    expect(`${results.data._id}`).toBe(`${vendor._id}`)
                }
            }

            await removeOneVendor(Vendor)(req, res)
            expect.assertions(2)
        })

        test('returns 400 if no vendor is found', async () => {
            const req = { params: 'test-vendor' }

            const res = {
                status(status) {
                    expect(status).toBe(400)
                    return this
                },
                end() {
                    expect(true).toBe(true)
                }
            }

            await removeOneVendor(Vendor)(req, res)
            expect.assertions(2)
        })
    })
})
