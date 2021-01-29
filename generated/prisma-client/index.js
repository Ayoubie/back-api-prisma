"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Role",
    embedded: false
  },
  {
    name: "ApprovalProcess",
    embedded: false
  },
  {
    name: "Customer",
    embedded: false
  },
  {
    name: "Item",
    embedded: false
  },
  {
    name: "Menu",
    embedded: false
  },
  {
    name: "Order",
    embedded: false
  },
  {
    name: "Payment",
    embedded: false
  },
  {
    name: "Restaurant",
    embedded: false
  },
  {
    name: "Filter",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["ENDPOINT"]}`
});
exports.prisma = new exports.Prisma();
