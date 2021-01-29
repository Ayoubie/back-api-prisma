const { createCustomer, updateCustomer, deleteCustomer } = require('./Mutations/mutationCustomer')
const { createItem, updateItem, deleteItem } = require('./Mutations/mutationItem')
const { createMenu, updateMenu, deleteMenu } = require('./Mutations/mutationMenu')
const { createOrder, updateOrder, deleteOrder } = require('./Mutations/mutationOrder')
const { createPayment, updatePayment, deletePayment } = require('./Mutations/mutationPayment')
const { createRestaurant, updateRestaurant, deleteRestaurant } = require('./Mutations/mutationRestaurant')
const { createFilter, updateFilter, deleteFilter } = require('./Mutations/mutationFilter')
const { login, signup } = require('./auth')

const Mutation = {
    createCustomer,
    updateCustomer,
    deleteCustomer,
    createItem,
    updateItem,
    deleteItem,
    createMenu,
    updateMenu,
    deleteMenu,
    createOrder,
    updateOrder,
    createPayment,
    updatePayment,
    deletePayment,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
    createFilter,
    updateFilter,
    deleteFilter,
    login,
    signup
}

module.exports = {
    Mutation
}