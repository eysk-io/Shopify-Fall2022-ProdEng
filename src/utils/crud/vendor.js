const getOneVendor = model => (req, res) => {
    return res.status(200).json({ data: "getOneVendor" })
}

const getManyVendors = model => (req, res) => {
    return res.status(200).json({ data: "getManyVendors" })
}

const createOneVendor = model => (req, res) => {
    return res.status(200).json({ data: "createOneVendor" })
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
