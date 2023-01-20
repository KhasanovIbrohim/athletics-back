//Exports
const PG = require('../../lib/postgres')

//Class
class Banks extends PG {
    getproducts() {
        return this.fetchAll(`
            SELECT * FROM product
        `)
    }
    getproductbyid(id) {
        return this.fetchAll(`
            SELECT * FROM product WHERE product_id = $1
        `, id)
    }
    postproducts(name, price, image, categoryID) {
        return this.fetchAll(`
            INSERT INTO product(product_name, product_price, roduct_company, product_image, category_id) VALUES($1, $2, 'Nike Sports Wear|Joksel', $3, $4);
        `, name, price, image, categoryID)
    }
    deleteproducts(id) {
        return this.fetchAll(`
            DELETE FROM product WHERE product_id = $1;
        `, id)
    }
    updateproducts(id, price) {
        return this.fetchAll(`
            UPDATE product SET product_price = $2 WHERE product_id = $1;
        `, id, price)
    }
    searchproducts(name) {
        return this.fetchAll(`
            SELECT * FROM product WHERE product_name ILIKE '${name}%' 
        `)
    }
}

//Module Exports
module.exports = new Banks()