import vendorControllers from './vendor.controllers'
import { Router } from 'express'

const router = Router()

// api/vendor/
router.route('/')
    .get(vendorControllers.getManyVendors)
    .post(vendorControllers.createOneVendor)

// api/vendor/:vendorName
router.route('/:vendorName')
    .get(vendorControllers.getOneVendor)
    .put(vendorControllers.updateOneVendor)
    .delete(vendorControllers.removeOneVendor)

export default router
