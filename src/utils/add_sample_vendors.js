import { Vendor } from "../resources/vendor/vendor.model"

export const addSampleVendors = async () => {
    const sampleVendors = [
        {
            name: "vancouver-canucks",
            description: "Nucks hockey team"
        },
        {
            name: "toronto-maple-leafs",
            description: "The worst"
        },
        {
            name: "ottawa-senators",
            description: "Team Tkachuk"
        },
        {
            name: "edmonton-oilers",
            description: "Aka the edmonton-mcdavid/draisaitl"
        },
        {
            name: "montreal-canadiens",
            description: "Made the finals last year"
        },
        {
            name: "winnipeg-jets",
            description: "Kyle Connor is so good"
        },
        {
            name: "calgary-flames",
            description: "Pretty okay I guess"
        }
    ]
    const options = { upsert: true }
    sampleVendors.forEach(async each => {
        await Vendor.findOneAndUpdate(
            { name: each.name },
            each,
            options
        )
    })
}
