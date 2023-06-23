'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Achievement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Achievement.belongsTo(models.User,
        {
          foreignKey: 'user_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        })
    }
  }
  Achievement.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'User ID is required',
        },
        isInt: {
          msg: 'User ID must be an integer',
        },
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Title is required',
        },
        len: [1, 255]
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Description is required'
        },
        len: [1, 255]
      },
    },
  }, {
    sequelize,
    modelName: 'Achievement',
    timestamps: true,
  });
  return Achievement;
};