//Exports
const PG = require('../../lib/postgres')

//Class
class Banks extends PG {
    getorders() {
        return this.fetchAll(`
            SELECT * FROM orders
        `)
    }
    makeorder(userId, productId) {
        return this.fetchAll(`
            INSERT INTO orders(user_id, product_id) VALUES($1, $2)
        `, userId, productId)
    }
    getOrdersById(id) {
        return this.fetchAll(`
            SELECT p.product_name, p.product_company, p.product_price, p.product_image, p.product_sale, p.product_procent FROM orders o JOIN product p ON o.product_id = p.product_id WHERE o.user_id = $1
        `, id)
    }
    setOrderStatus(text, id) {
        return this.fetchAll(`
            UPDATE orders SET product_status = $1 WHERE order_id = $2
        `, text, id)
    }
}

//Module Exports
module.exports = new Banks()