const getOneVendor = model => (req, res) => {
    return res.status(200).json({ data: "getOneVendor" })
}

const getManyVendors = model => (req, res) => {
    return res.status(200).json({ data: "getManyVendors" })
}

export const createOneVendor = model => async (req, res) => {
    try {
        const doc = await model.create({ ...req.body })
        return res.status(201).json({ data: doc })
    } catch (e) {
        console.error(e)
        return res.status(400).end()
    }
}

const updateOneVendor = model => (req, res) => {
    return res.status(200).json({ data: "updateOneVendor" })
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
