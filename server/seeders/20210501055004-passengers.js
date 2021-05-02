module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(`Passengers`, [
      {
        id: 1,
        firstName: `Carlos`,
        lastName: `Calvo`,
        flightNumber: `A1234`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        firstName: `Romina`,
        lastName: `Da`,
        flightNumber: `B1234`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        firstName: `Agustina`,
        lastName: `Breo`,
        flightNumber: `C1234`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },
  down: queryInterface => {
    return queryInterface.bulkDelete(`Passengers`, null, {})
  },
}
