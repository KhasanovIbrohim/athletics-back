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
            await model.makeorder(userId, productId)
            res.send([{"name": "Added Sucsessfully"}])
        } catch(e) {
            res.status(500).json({
                message: e.message
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
            await model.setOrderStatus(text, id)
            res.send([{"name": "We are canseling the order"}])
        } catch(e) {
            res.status(500).json({
                message: e.message
            })
        }
    }
}