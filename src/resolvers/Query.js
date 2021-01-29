const { me } = require('./auth')
const { customer, customers } = require('./Queries/queryCustomer')
const { item, items } = require('./Queries/queryItem')
const { menu, menus } = require('./Queries/queryMenu')
const { order, orders } = require('./Queries/queryOrder')
const { payment, payments } = require('./Queries/queryPayment')
const { restaurant, restaurants } = require('./Queries/queryRestaurant')
const { filter, filters } = require('./Queries/queryFilter')

const Query = {
    me,
    customer,
    customers,
    item,
    items,
    menu,
    menus,
    order,
    orders,
    payment,
    payments,
    restaurant,
    restaurants,
    filter,
    filters
}

module.exports = {
    Query
}