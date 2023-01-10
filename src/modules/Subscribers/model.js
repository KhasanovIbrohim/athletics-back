//Exports
const PG = require('../../lib/postgres')

//Class
class Banks extends PG {
    getsubscribers() {
        return this.fetchAll(`
            SELECT * FROM subscribers
        `)
    }
    getsubscribe(phone, email) {
        return this.fetchAll(`
            INSERT INTO subscribers(subscriber_phone, subscriber_email) VALUES($1, $2) RETURNING subscriber_email
        `, phone, email)
    }
}

//Module Exports
module.exports = new Banks()