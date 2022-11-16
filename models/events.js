'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  events.init({
    year: DataTypes.INTEGER,
    month: DataTypes.INTEGER,
    day: DataTypes.INTEGER,
    hour: DataTypes.INTEGER,
    minute: DataTypes.INTEGER,
    type: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    city: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    user_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'events',
  });
  return events;
};