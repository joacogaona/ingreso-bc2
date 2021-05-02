const { Model } = require(`sequelize`)
module.exports = (sequelize, DataTypes) => {
  class Luggage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Luggage.belongsTo(models.Passenger, {
        as: `passenger`,
        foreignKey: `passengerId`,
      })
      Luggage.belongsTo(models.LuggageCategory, {
        as: `luggageCategory`,
        foreignKey: `luggageCategoryId`,
      })
    }
  }
  Luggage.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING(`500`),
    },
    {
      sequelize,
      paranoid: true,
      modelName: `Luggage`,
    },
  )
  return Luggage
}
