//Exports
const model = require('./model')

//Module Exports
module.exports = {
    getorders: async(req, res) => {
        try {
            res.send(await model.getorders())
        } catch(e) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    makeorder: async(req, res) => {
        try {
            var {userId, productId} = req.body
            res.send(await model.makeorder(userId, productId))
        } catch(e) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    getOrdersById: async(req, res) => {
        try {
            var {id} = req.params
            res.send(await model.getOrdersById(id))
        } catch(e) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    setOrderStatus: async(req, res) => {
        try {
            var {text, id} = req.body
            res.send(await model.setOrderStatus(text, id))
        } catch(e) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}