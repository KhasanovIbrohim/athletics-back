//Exports
const PG = require('../../lib/postgres')

//Class
class Banks extends PG {
    getcategory() {
        return this.fetchAll(`
            SELECT * FROM category
        `)
    }
    getCategoryById(id) {
        return this.fetchAll(`
        SELECT p.product_name, p.product_company, p.product_price, p.product_image, p.product_sale, p.product_procent FROM category c JOIN product p ON c.category_id = p.category_id WHERE c.category_id = $1;
        `, id)
    }
}

//Module Exports
module.exports = new Banks()