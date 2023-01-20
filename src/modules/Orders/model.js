//Exports
const PG = require('../../lib/postgres')

//Class
class Banks extends PG {
    getorders() {
        return this.fetchAll(`
            SELECT * FROM orders
        `)
    }
    getordersToSeller() {
        return this.fetchAll(`
            SELECT o.order_id, p.product_name, o.user_phone, p.product_price, o.order_status FROM orders o JOIN product p ON o.product_id = p.product_id;
        `)
    }
    makeorder(userId, productId, phone) {
        return this.fetchAll(`
            INSERT INTO orders(user_id, product_id, order_status, user_phone) VALUES($1, $2, 'Confirmation pending', $3)
        `, userId, productId, phone)
    }
    popularalgorithm(productId) {
        return this.fetchAll(`
            INSERT INTO popular_algoritm(product_id) VALUES($1);
        `,productId)
    }
    getpopularity() {
        return this.fetchAll(`
            SELECT product_id, count(product_id) as count from popular_algoritm group by product_id order by count desc;
        `)
    }
    getOrdersById(id) {
        return this.fetchAll(`
            SELECT o.user_phone, o.order_id, o.order_status, p.product_name, p.product_company, p.product_price, p.product_image, p.product_sale, p.product_procent FROM orders o JOIN product p ON o.product_id = p.product_id WHERE o.user_id = $1
        `, id)
    }
    setOrderStatus(text, id) {
        return this.fetchAll(`
            UPDATE orders SET order_status = $1 WHERE order_id = $2
        `, text, id)
    }
}

//Module Exports
module.exports = new Banks()