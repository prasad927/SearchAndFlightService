'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City,{
        foreignKey:"cityId",
        onDelete:"CASCADE"
      })
    }
  }
  City.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'City',
    unique:true
  });
  return City;
};