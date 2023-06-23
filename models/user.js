'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Profile,
        {
          foreignKey: 'user_id'
        })

      User.hasMany(models.Profile,
        {
          foreignKey: 'user_id'
        })

      User.hasMany(models.Education,
        {
          foreignKey : 'user_id'
        })

      User.hasMany(models.Achievement,
        {
          foreignKey : 'user_id'
        })

      User.hasMany(models.Specialist,
        {
          foreignKey: 'user_id'
        })

      User.hasMany(models.SocialMedia,
        {
          foreignKey: 'user_id'
        })

      User.hasMany(models.Article,
        {
          foreignKey: 'user_id'
        })

      User.hasMany(models.Article,
        {
          foreignKey: 'tag_id'
        })

      User.hasMany(models.Event,
        {
          foreignKey: 'user_id'
        })
    }
  }
  User.init({
    username: {
      allowNull: false,
      unique: {
        args: true,
        msg: 'Username is already'
      },
      validate: {
        notEmpty:{
          args: true,
          msg: 'Username is required'
        },
        len: {
          args: [6, 20],
          msg: 'Username must be at least 6 characters'
        },
      },
      type: DataTypes.STRING
    },
    email: {
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email is already taken'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address'
        },
        notEmpty: {
          args: true,
          msg: 'Email is required'
        },
        len: [1, 255],
      },
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Password is required',
        },
        len: {
          args: [6, 20],
          msg: 'Password must be between 6 and 20 characters',
        },
      },
    },
    profile_image: {
      type: DataTypes.STRING,
      allowNull: true
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        isIn: {
          args: [['admin', 'coach', 'athlete']],
          msg: 'Invalid role. Must be either "admin", "user" or "athlete".',
        },
        notEmpty: {
          args: true,
          msg: 'Role is required',
        },
      },
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
  },
  {
    hooks: {
      beforeCreate: (user, options) => {
        const salt = bcrypt.genSaltSync(10)
        const hashPassword = bcrypt.hashSync(user.password, salt)
        user.password = hashPassword
      },
    },
    sequelize,
    modelName: 'User',
    timestamps: true,
  });
  return User;
};