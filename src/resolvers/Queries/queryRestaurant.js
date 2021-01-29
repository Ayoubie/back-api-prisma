const { forwardTo } = require('prisma-binding')

async function restaurant (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function restaurants (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    restaurant,
    restaurants
  }