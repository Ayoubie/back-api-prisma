const { forwardTo } = require('prisma-binding')

async function menu (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function menus (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    menu,
    menus
  }