//Exports
const model = require('./model')

//Module Exports
module.exports = {
    sendMessage: async(req, res) => {
        try {
            const {userId, chatId, messageText} = req.body
            res.send(await model.sendMessage(userId, chatId, messageText))
        } catch(e) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    getChatsById: async(req, res) => {
        try {
            const {userId} = req.body
            res.send(await model.getChatsById(userId))
        } catch(e) {
            res.status(500).json({
                message: err.message
            })
        }
    },
    getMessages: async(req, res) => {
        try {
            const {chatId} = req.body
            res.send(await model.getMessages(chatId))
        } catch(e) {
            res.status(500).json({
                message: err.message
            })
        }
    }
}