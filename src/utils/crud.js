const getOne = model => async (req, res) => {
    return res.status(200).json({ data: "getOne" })
}

const getMany = model => async (req, res) => {
    return res.status(200).json({ data: "getMany" })
}

const createOne = model => async (req, res) => {
    return res.status(200).json({ data: "createOne" })
}

const updateOne = model => async (req, res) => {
    return res.status(200).json({ data: "updateOne" })
}

const removeOne = model => async (req, res) => {
    return res.status(200).json({ data: "removeOne" })
}

export const crudControllers = model => ({
    getOne: getOne(model),
    getMany: getMany(model),
    createOne: createOne(model),
    updateOne: updateOne(model),
    removeOne: removeOne(model)
})
