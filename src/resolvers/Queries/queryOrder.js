const { forwardTo } = require('prisma-binding')

async function order (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function orders (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    order,
    orders
  }