const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { getCustomer, APP_SECRET } = require('../utils')

async function signup (_, args, context, info) {
  const password = await bcrypt.hash(args.password, 10);

  const customer = await context.prisma.mutation.createCustomer(
      {
          data: {
            first_name: args.first_name,
            last_name: args.last_name,
            birthday : args.birthday,
            telephone: args.telephone,
            email: args.email,
            password: password,
          },
      }
  )

  return {
    token: jwt.sign({ customerId: customer.id }, APP_SECRET),
    customer
  }
}

async function login (parent, {email, password}, ctx, info) {
    const customer = await ctx.prisma.query.customer({ where: { email } }, '{ id first_name last_name birthday telephone email password role created}')
    
    if (!customer) {
      throw new Error(`No such customer found for email: ${email}`)
    }
    const valid = await bcrypt.compare(password, customer.password)

    if (!valid) {
      throw new Error('Invalid password')
    }

    return {
      token: jwt.sign({ customerId: customer.id }, APP_SECRET),
      customer  
    }
  }

// Q currently customer
async function me (parent, args, ctx, info) {
    const customer = await getCustomer(ctx)
    return customer
}

  module.exports = {
    me,
    signup,
    login
  }