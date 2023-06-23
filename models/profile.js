'use strict';
const {  Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profile.belongsTo(models.User,
        {
          foreignKey: 'user_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        })

      Profile.belongsTo(models.User,
        {
          foreignKey: 'coach_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        })
    }
  }
  Profile.init({
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
    full_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Full name is required',
        },
        notEmpty: {
          msg: 'Full name cannot be empty',
        },
      },
    },
    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: {
          msg: 'Phone number must be an integer',
        },
      },
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Date of birth is required',
        },
        isDate: {
          msg: 'Invalid date format for date of birth',
        },
      },
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Gender is required',
        },
        isIn: {
          args: [['male', 'female']],
          msg: 'Invalid gender. Must be either "male" or "female"',
        },
      },
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [0, 255],
          msg: 'Bio length must be between 0 and 255 characters',
        },
      },
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: {
          args: true,
          msg: 'Height must be an integer',
        },
      },
    },
    weight: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      validate: {
        isDecimal: {
          args: true,
          msg: 'Weight must be a decimal number',
        },
      },
    },
    belt: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [0, 255],
          msg: 'Belt length must be between 0 and 255 characters',
        }
      },
    },
    coach_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: {
          msg: 'User ID must be an integer',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Profile',
    timestamps: true,
  });
  return Profile;
};