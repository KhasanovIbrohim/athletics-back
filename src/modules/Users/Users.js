//Exports
const model = require('./model')

//Module Exports
module.exports = {
    getusers: async(req, res) => {
        try {
            res.send(await model.getusers())
        } catch(e) {
            res.status(500).json({
                message: e.message
            })
        }
    },
    login: async(req, res) => {
        try {
            var {username, password} = req.body
            res.send(await model.login(username, password))
        } catch(e) {
            res.status(500).json({
                message: e.message
            })
        }
    },
    register: async(req, res) => {
        try {
            var {name, password, phoneNumber} = req.body
            await model.register(name, password, phoneNumber)
            res.send([{ "name": "Registered Successfully"}])
        } catch(e) {
            res.status(500).json({
                message: e.message
            })
        }
    }
}