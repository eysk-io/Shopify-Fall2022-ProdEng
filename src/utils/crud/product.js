export const getAllProducts = model => async (_req, res) => {
    try {
        const doc = await model
            .find({})
            .lean()
            .exec()

        return res.status(200).json({ data: doc })
    } catch (e) {
        console.error(e)
        return res.status(400).end()
    }
}

const getAllProductsByVendor = model => async (req, res) => {
    return res.status(200).json({ data: "getAllProductsByVendor" })
}

const getOneProduct = model => async (req, res) => {
    return res.status(200).json({ data: "getOneProduct" })
}

const createOneProduct = model => async (req, res) => {
    return res.status(200).json({ data: "createOneProduct" })
}

const updateOneProduct = model => async (req, res) => {
    return res.status(200).json({ data: "updateOneProduct" })
}

const removeOneProduct = model => async (req, res) => {
    return res.status(200).json({ data: "removeOneProduct" })
}

export const productCrudControllers = model => ({
    getAllProducts: getAllProducts(model),
    getAllProductsByVendor: getAllProductsByVendor(model),
    getOneProduct: getOneProduct(model),
    createOneProduct: createOneProduct(model),
    updateOneProduct: updateOneProduct(model),
    removeOneProduct: removeOneProduct(model)
})
