//Exports
const PG = require('../../lib/postgres')

//Class
class Banks extends PG {
    getusers() {
        return this.fetchAll(`
            SELECT * FROM users
        `)
    }
    login(username, password) {
        return this.fetchAll(`
            SELECT * FROM users WHERE user_name = $1 AND user_password = $2
        `, username, password)
    }
    register(name, password, phoneNumber) {
        return this.fetchAll(`
            INSERT INTO users(user_name, user_password, user_phone, user_isAdmin, user_isSeller) VALUES($1, $2, $3, false, false)
        `, name, password, phoneNumber)
    }
}

//Module Exports
module.exports = new Banks()