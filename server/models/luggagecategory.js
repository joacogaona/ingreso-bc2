const { Model } = require(`sequelize`)
module.exports = (sequelize, DataTypes) => {
  class LuggageCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LuggageCategory.hasMany(models.Luggage, {
        as: `luggage`,
        foreignKey: `id`,
      })
    }
  }
  LuggageCategory.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true,
      modelName: `LuggageCategory`,
    },
  )
  return LuggageCategory
}
