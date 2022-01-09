export const getAllProducts = productModel => async (_req, res) => {
    try {
        const doc = await productModel
            .find({})
            .lean()
            .exec()

        return res.status(200).json({ data: doc })
    } catch (e) {
        console.error(e)
        return res.status(400).end()
    }
}

export const getAllProductsByVendor = (vendorModel, productModel) => async (req, res) => {
    try {
        const vendor = await vendorModel
            .findOne({ name: req.params.vendorName })
            .lean()
            .exec()

        if (!vendor) {
            return res.status(400).end()
        }

        const doc = await productModel
            .find({ vendor: req.params.vendorName })
            .lean()
            .exec()

        if (!doc) {
            return res.status(400).end()
        }

        return res.status(200).json({ data: doc })
    } catch (e) {
        console.error(e)
        return res.status(400).end()
    }
}

export const getOneProduct = (vendorModel, productModel) => async (req, res) => {
    try {

    } catch (e) {
        console.error(e)
        return res.status(400).end()
    }
}

export const createOneProduct = (vendorModel, productModel) => async (req, res) => {
    try {

    } catch (e) {
        console.error(e)
        return res.status(400).end()
    }
}

export const updateOneProduct = (vendorModel, productModel) => async (req, res) => {
    try {

    } catch (e) {
        console.error(e)
        return res.status(400).end()
    }
}

export const removeOneProduct = (vendorModel, productModel) => async (req, res) => {
    try {

    } catch (e) {
        console.error(e)
        return res.status(400).end()
    }
}

export const productCrudControllers = (vendorModel, productModel) => ({
    getAllProducts: getAllProducts(productModel),
    getAllProductsByVendor: getAllProductsByVendor(vendorModel, productModel),
    getOneProduct: getOneProduct(vendorModel, productModel),
    createOneProduct: createOneProduct(vendorModel, productModel),
    updateOneProduct: updateOneProduct(vendorModel, productModel),
    removeOneProduct: removeOneProduct(vendorModel, productModel)
})
