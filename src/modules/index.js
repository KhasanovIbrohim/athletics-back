//Exports
const express = require('express')
const router = express.Router()
const category = require('./Category/Category')
const orders = require('./Orders/Orders')
const products = require('./Products/Products')
const subscribers = require('./Subscribers/Subscribers')
const users = require('./Users/Users')

//Router
router
    .get('/users', users.getusers)
    .get('/subscribers', subscribers.getsubscribers)
    .get('/product', products.getproducts)
    .get('/orders', orders.getorders)
    .get('/category', category.getcategory)

    .post('/login', users.login)
    .post('/register', users.register)

    .get('/subscribers', subscribers.getsubscribers)
    .post('/getsubscribe', subscribers.getsubscribe)

    .post('/addproduct', products.postproducts)
    .get('/deleteproduct/:id', products.deleteproducts)
    .post('/updateproduct', products.updateproducts)

    .post('/makeorder', orders.makeorder)
    .get('/getordersbyid/:id', orders.getOrdersById)
    .post('/setorderstatus', orders.setOrderStatus)

    .get('/getproductsbycategoryid/:id', category.getCategoryById)
    .get('/getorderstoseller', orders.getordersToSeller)
    .post('/search', products.searchproducts)

    .get('/getpopularitystatistics', orders.getpopularity)
    .get('/getproductbyid/:id', products.getproductbyid)

//Module Exports
module.exports = router