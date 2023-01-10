//Exports
const model = require('./model')

//Module Exports
module.exports = {
    getsubscribers: async(req, res) => {
        try {
            res.send(await model.getsubscribers())
        } catch(e) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    getsubscribe: async(req, res) => {
        try {
            var {phone, email} = req.body
            res.send(await model.getsubscribe(phone, email))
        } catch(e) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}