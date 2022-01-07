import { Router } from 'express'
import controllers from './product.controllers'

const router = Router()

// /api/product
router.route('/')
    .get(controllers.getAllProducts)

// /api/product/:vendorName
router.route('/:vendorName')
    .get(controllers.getAllProductsByVendor)
    .post(controllers.createOneProduct)

// /api/product/:vendorName/:productName
router.route('/:vendorName/:productName')
    .get(controllers.getOneProduct)
    .put(controllers.updateOneProduct)
    .delete(controllers.removeOneProduct)

export default router
