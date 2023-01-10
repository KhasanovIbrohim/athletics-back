//Exports
const model = require('./model')

//Module Exports
module.exports = {
    getcategory: async(req, res) => {
        try {
            res.send(await model.getcategory())
        } catch(e) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    getCategoryById: async(req, res) => {
        try {
            const {id} = req.params
            res.send(await model.getCategoryById(id))
        } catch(e) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}