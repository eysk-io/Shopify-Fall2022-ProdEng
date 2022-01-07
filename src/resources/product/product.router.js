import { Router } from 'express'
import controllers from './product.controllers'

const router = Router()

// /api/product
router.route('/')
    .get(controllers.getManyProducts)
    .post(controllers.createOneProduct)

// /api/product/:id
router.route('/:id')
    .get(controllers.getOneProduct)
    .put(controllers.updateOneProduct)
    .delete(controllers.removeOneProduct)

export default router
