const { Model } = require(`sequelize`)
module.exports = (sequelize, DataTypes) => {
  class LuggageCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
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
