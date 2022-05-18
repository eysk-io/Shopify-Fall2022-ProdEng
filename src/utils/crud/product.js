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

export const getOneProduct = productModel => async (req, res) => {
    try {
        const doc = await productModel
            .findOne({
                vendor: req.params.vendorName,
                name: req.params.productName
            })
            .lean()
            .exec()

        if (!doc)
            return res.status(400).end()

        return res.status(200).json({ data: doc })
    } catch (e) {
        console.error(e)
        return res.status(400).end()
    }
}

export const createOneProduct = productModel => async (req, res) => {
    try {
        req.body.name = req.body.name
            .toString()
            .toLowerCase()
            .trim()
            .replace(/ /g, '-')

        const doc = await productModel
            .create({ ...req.body })

        return res.status(201).json({ data: doc })

    } catch (e) {
        console.error(e)
        return res.status(400).end()
    }
}

export const updateOneProduct = productModel => async (req, res) => {
    try {
        req.body.name = req.body.name
            .toString()
            .toLowerCase()
            .trim()
            .replace(/ /g, '-')

        const doc = await productModel
            .findOneAndUpdate(
                { name: req.params.productName, },
                req.body,
                { new: true }
            )
            .lean()
            .exec()

        if (!doc)
            return res.status(400).end()

        return res.status(200).json({ data: doc })
    } catch (e) {
        console.error(e)
        return res.status(400).end()
    }
}

export const removeOneProduct = productModel => async (req, res) => {
    try {
        const removed = await productModel.findOneAndRemove({ name: req.params.productName })

        if (!removed)
            return res.status(400).end()

        return res.status(200).json({ data: removed })
    } catch (e) {
        console.error(e)
        return res.status(400).end()
    }
}

export const productCrudControllers = productModel => ({
    getAllProducts: getAllProducts(productModel),
    getOneProduct: getOneProduct(productModel),
    createOneProduct: createOneProduct(productModel),
    updateOneProduct: updateOneProduct(productModel),
    removeOneProduct: removeOneProduct(productModel)
})
