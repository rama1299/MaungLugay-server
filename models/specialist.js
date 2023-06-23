'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Specialist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Specialist.belongsTo(models.User,
        {
          foreignKey: 'user_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        })
    }
  }
  Specialist.init({
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'User ID is required.',
        },
        isInt: {
          msg: 'User ID must be an integer.',
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Name is required.',
        },
        notEmpty: {
          msg: 'Name cannot be empty.',
        },
      },
    },
    speciality: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {
    sequelize,
    modelName: 'Specialist',
    timestamps: true,
  });
  return Specialist;
};