//Exports
const model = require('./model')

//Module Exports
module.exports = {
    getproducts: async(req, res) => {
        try {
            res.send(await model.getproducts())
        } catch(e) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    postproducts: async(req, res) => {
        var {name, price, image, categoryID} = req.body
        try {
            res.send(await model.postproducts(name, price, image, categoryID))
        } catch(e) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    deleteproducts: async(req, res) => {
        var {id} = req.params
        try {
            res.send(await model.deleteproducts(id))
        } catch(e) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    updateproducts: async(req, res) => {
        var {id, price} = req.body
        try {
            res.send(await model.updateproducts(id, price))
        } catch(e) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    searchproducts: async(req, res) => {
        var {name} = req.body
        try {
            res.send(await model.searchproducts(name))
        } catch(e) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}