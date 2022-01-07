const getOne = model => async (req, res) => {
    try {
        const doc = await model
            .findOne({ _id: req.params.id })
            .lean()
            .exec()

        if (!doc) {
            res.status(400).end()
        }

        res.status(200).json({ data: doc })
    } catch (e) {
        console.error(e)
        res.status(400).end()
    }
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
