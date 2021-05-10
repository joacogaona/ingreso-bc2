module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(`Passengers`, [
      {
        id: 10001,
        firstName: `Carlos`,
        lastName: `Calvo`,
        flightNumber: `A1234`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10002,
        firstName: `Romina`,
        lastName: `Da`,
        flightNumber: `B1234`,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 10003,
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
