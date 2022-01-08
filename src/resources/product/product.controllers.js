import { productCrudControllers } from '../../utils/crud/product'
import { Vendor } from '../vendor/vendor.model'
import { Product } from './product.model'

export default productCrudControllers(Vendor, Product)
