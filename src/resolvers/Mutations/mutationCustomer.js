const { forwardTo } = require('prisma-binding')
const { getCustomer } = require('../../utils')

async function createCustomer (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}

async function updateCustomer (parent, args, ctx, info) {
  return forwardTo('prisma')(parent, args, ctx, info)
}

async function deleteCustomer (parent, args, ctx, info) {
  const requestCustomer = await getCustomer(ctx)
  
  if(requestCustomer.role === "CUSTOMER"){
    throw new Error(`You're lost my friend 404`)
  }else {
    return forwardTo('prisma')(parent, args, ctx, info)
  }
}

module.exports = {
  createCustomer,
  updateCustomer,
  deleteCustomer
}