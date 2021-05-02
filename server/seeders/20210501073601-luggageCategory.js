module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(`LuggageCategories`, [
      {
        id: 1,
        name: `big`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: `small`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        name: `clothes`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },
  down: queryInterface => {
    return queryInterface.bulkDelete(`LuggageCategories`, null, {})
  },
}
