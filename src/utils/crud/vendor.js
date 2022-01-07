export const getOneVendor = model => async (req, res) => {
    try {
        const doc = await model
            .findOne({ name: req.params.vendorName })
            .lean()
            .exec()

        if (!doc) {
            return res.status(400).end()
        }

        res.status(200).json({ data: doc })
    } catch (e) {
        console.error(e)
        res.status(400).end()
    }
}

export const getManyVendors = model => async (req, res) => {
    try {
        const docs = await model
            .find({})
            .lean()
            .exec()
        res.status(200).json({ data: docs })
    } catch (e) {
        console.error(e)
        res.status(400).end()
    }
}

export const createOneVendor = model => async (req, res) => {
    try {
        req.body.name = req.body.name
            .toString()
            .toLowerCase()
            .trim()
            .replace(/ /g, '-')

        const doc = await model.create({ ...req.body })
        return res.status(201).json({ data: doc })
    } catch (e) {
        console.error(e)
        return res.status(400).end()
    }
}

export const updateOneVendor = model => async (req, res) => {
    try {
        const doc = await model
            .findOneAndUpdate(
                { name: req.params.vendorName },
                req.body,
                { new: true }
            )
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

const removeOneVendor = model => (req, res) => {
    return res.status(200).json({ data: "removeOneVendor" })
}

export const vendorCrudControllers = model => ({
    getOneVendor: getOneVendor(model),
    getManyVendors: getManyVendors(model),
    createOneVendor: createOneVendor(model),
    updateOneVendor: updateOneVendor(model),
    removeOneVendor: removeOneVendor(model)
})
