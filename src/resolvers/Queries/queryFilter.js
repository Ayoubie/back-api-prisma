const { forwardTo } = require('prisma-binding')

async function filter (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function filters (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    filter,
    filters
  }