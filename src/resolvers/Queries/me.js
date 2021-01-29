async function me (parent, args, ctx, info) {
    const customer = {
        id: "blabla",
        first_name: "Ayoub",
        last_name: "ibnc",
        birthday: "04-04-1996",
        telephone: "0711223344",
        email: "ia@gmail.com",
        password: "pass123",
        created: false
    }
    return customer
  }

  module.exports = {
    me
  }