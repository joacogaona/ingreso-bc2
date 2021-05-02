module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(`Luggage`, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING(`500`),
      },
      luggageCategoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: `LuggageCategories`,
          key: `id`,
        },
        allowNull: false,
        onDelete: `CASCADE`,
        onUpdate: `CASCADE`,
      },
      passengerId: {
        type: Sequelize.INTEGER,
        references: {
          model: `Passengers`,
          key: `id`,
        },
        allowNull: false,
        onDelete: `CASCADE`,
        onUpdate: `CASCADE`,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    })
  },
  down: async queryInterface => {
    await queryInterface.dropTable(`Luggage`)
  },
}
