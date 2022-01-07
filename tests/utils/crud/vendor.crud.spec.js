import { Vendor } from '../../../src/resources/vendor/vendor.model'
import { createOneVendor } from '../../../src/utils/crud/vendor'
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
})
