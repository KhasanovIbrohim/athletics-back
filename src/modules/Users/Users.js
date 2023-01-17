//Exports
const model = require('./model')
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../config')

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
            const data = await model.getusersByName(name);
            if(data.length == 0){
                if(name.length >= 3){
                    if(password.length >= 5){
                        if(phoneNumber.length >= 8){
                            await model.register(name, password, phoneNumber)
                            res.send([{ "name": "Registered Successfully"}])
                        } else {
                            res.send([{ "name": "Phone number not long enough!"}])  
                        }
                    } else {
                        res.send([{ "name": "Password not long enough!"}])
                    }
                }else {
                    res.send([{ "name": "User name not long enough!"}])
                }
            }
            else {
                res.send([{ "name": "Username is alredy used!"}])
            }
        } catch(e) {
            res.status(500).json({
                message: e.message
            })
        }
    }
}