const getOneProduct = model => async (req, res) => {
    return res.status(200).json({ data: "getOneProduct" })
}

const getManyProducts = model => async (req, res) => {
    return res.status(200).json({ data: "getManyProducts" })
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
    getOneProduct: getOneProduct(model),
    getManyProducts: getManyProducts(model),
    createOneProduct: createOneProduct(model),
    updateOneProduct: updateOneProduct(model),
    removeOneProduct: removeOneProduct(model)
})
