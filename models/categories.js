'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Categories.hasMany(models.Article,
        {
          foreignKey: 'category_id'
        })

      Categories.hasMany(models.Event,
        {
          foreignKey: 'category_id'
        })
    }
  }
  Categories.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'cannot be null'
        },
        len: {
          args: [1, 25],
          msg: 'len must be at least'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Categories',
    timestamps: true,
  });
  return Categories;
};