import { Router } from 'express'
import controllers from './product.controllers'

const router = Router()

// /api/product
router.route('/')
    .get(controllers.getAllProducts)
    .post(controllers.createOneProduct)

// /api/product/:productName
router.route('/:productName')
    .get(controllers.getOneProduct)
    .put(controllers.updateOneProduct)
    .delete(controllers.removeOneProduct)

export default router
