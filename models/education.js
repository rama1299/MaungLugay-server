'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Education extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Education.belongsTo(models.User,
        {
          foreignKey: 'user_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        })
    }
  }
  Education.init({
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
    level: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Level is required',
        },
        len: {
          args: [1, 20],
          msg: 'Bio length must be between 1 and 20 characters'
        },
      },
    },
    institution: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Level is required',
        },
        len: {
          args: [1, 225],
          msg: 'Bio length must be between 1 and 225 characters'
        },
      },
    },
    class: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: {
          args: [1, 20],
          msg: 'Bio length must be between 1 and 20 characters'
        },
      }
    }
  }, {
    sequelize,
    modelName: 'Education',
    timestamps: true,
  });
  return Education;
};