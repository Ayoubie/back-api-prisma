const { forwardTo } = require('prisma-binding')

async function item (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function items (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    item,
    items
  }