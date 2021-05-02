const { Model } = require(`sequelize`)
module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Passenger.hasMany(models.Luggage, {
        as: `luggage`,
        foreignKey: `id`,
      })
    }
  }
  Passenger.init(
    {
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      flightNumber: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      modelName: `Passenger`,
    },
  )
  return Passenger
}
