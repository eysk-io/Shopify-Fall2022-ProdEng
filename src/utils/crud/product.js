const getAllProducts = model => async (req, res) => {
    return res.status(200).json({ data: "getAllProducts" })
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
