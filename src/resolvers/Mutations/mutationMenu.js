const { forwardTo } = require('prisma-binding')
const { getCustomer } = require('../../utils')

async function createMenu (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function updateMenu (parent, args, ctx, info) {
  return forwardTo('prisma')(parent, args, ctx, info)
}

async function deleteMenu (parent, args, ctx, info) {
  const requestCustomer = await getCustomer(ctx)
  
  if(requestCustomer.role === "CUSTOMER"){
    throw new Error(`You're lost my friend 404`)
  }else {
    return forwardTo('prisma')(parent, args, ctx, info)
  }
}

module.exports = {
  createMenu,
  updateMenu,
  deleteMenu
}