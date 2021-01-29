require('dotenv').config()
const jwt = require('jsonwebtoken')
const APP_SECRET = process.env.APP_SECRET

async function getCustomer(ctx) {
  const Authorization = ctx.req.request.get('Authorization')
  if (Authorization && Authorization !== 'null') {
    const token = Authorization;
    const { customerId } = jwt.verify(token, APP_SECRET)
    const customer = await ctx.prisma.query.customer({ where: { id: customerId } }, '{ id first_name last_name birthday telephone email password }')
    return customer
  } else {  
    throw new AuthError()
  }
}

class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}


module.exports = {
  getCustomer,
  APP_SECRET
}