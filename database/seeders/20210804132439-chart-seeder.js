"use strict";

const data = [
  {
    name: "Rubi",
    age: 31,
    gender: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Randy",
    age: 32,
    gender: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Apple",
    age: 18,
    gender: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Mango",
    age: 14,
    gender: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Ferry",
    age: 37,
    gender: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Johnson",
    age: 55,
    gender: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Larry",
    age: 45,
    gender: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Ryne",
    age: 12,
    gender: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Christopher",
    age: 24,
    gender: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Charts", data);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Charts", data);
  },
};
