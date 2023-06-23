'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SocialMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SocialMedia.belongsTo(models.User,
        {
          foreignKey: 'user_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        })
    }
  }
  SocialMedia.init({
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
    platform: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Platform is required.',
        },
        notEmpty: {
          msg: 'Platform cannot be empty.',
        },
      },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'URL is required.',
        },
        notEmpty: {
          msg: 'URL cannot be empty.',
        },
        isUrl: {
          msg: 'URL must be a valid URL.',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'SocialMedia',
    timestamps: true,
  });
  return SocialMedia;
};