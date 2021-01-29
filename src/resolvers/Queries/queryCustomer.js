const { forwardTo } = require('prisma-binding')

async function customer (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function customers (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    customer,
    customers
  }