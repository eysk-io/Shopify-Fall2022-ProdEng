import { Vendor } from '../../../src/resources/vendor/vendor.model'
import {
    createOneVendor,
    getManyVendors,
    getOneVendor
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
                    expect(results.data.name).toBe(req.body.name)
                    expect(results.data.description).toBe(req.body.description)
                }
            }

            await createOneVendor(Vendor)(req, res)
            expect.assertions(3)
        })

        test('return 400 status creating vendor that already exists', async () => {
            await Vendor.create({
                name: 'Test vendor',
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
                { name: 'Test vendor0', description: 'my test vendor0' },
                { name: 'Test vendor1', description: 'my test vendor1' },
                { name: 'Test vendor2', description: 'my test vendor2' },
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
                        expect(doc.name).toBe(`Test vendor${index}`)
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
                name: 'Test vendor',
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
                }
            }

            await getOneVendor(Vendor)(req, res)
            expect.assertions(2)
        })

        test('returns 400 if no vendor is found', async () => {
            const req = {
                params: {
                    vendorName: 'Test vendor'
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
})
