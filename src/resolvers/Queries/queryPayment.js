const { forwardTo } = require('prisma-binding')

async function payment (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function payments (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    payment,
    payments
  }