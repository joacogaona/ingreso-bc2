module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(`Luggage`, [
      {
        name: `cartera`,
        description: `azul con diamantes`,
        luggageCategoryId: 1,
        passengerId: 10001,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `valija`,
        description: `negra con cinta roja`,
        luggageCategoryId: 2,
        passengerId: 10002,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: `poncho`,
        description: `poncho con frase "mate amargo argentino"`,
        luggageCategoryId: 3,
        passengerId: 10003,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },
  down: queryInterface => {
    return queryInterface.bulkDelete(`Luggage`, null, {})
  },
}
