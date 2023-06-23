'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Event.belongsTo(models.Categories,
        {
          foreignKey: 'category_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        })

      Event.belongsTo(models.User,
        {
          foreignKey: 'user_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        })
    }
  }
  Event.init({
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Category ID is required.',
        },
        isInt: {
          msg: 'Category ID must be an integer.',
        },
      },
    },
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
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Title is required.',
        },
        notEmpty: {
          msg: 'Title cannot be empty.',
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Image URL is required.',
        },
        notEmpty: {
          msg: 'Image URL cannot be empty.',
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Description is required.',
        },
        notEmpty: {
          msg: 'Description cannot be empty.',
        },
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Location is required.',
        },
        notEmpty: {
          msg: 'Location cannot be empty.',
        },
      },
    },
    contact_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Contact name is required.',
        },
        notEmpty: {
          msg: 'Contact name cannot be empty.',
        },
      },
    },
    contact_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Contact number is required.',
        },
        isInt: {
          msg: 'Contact number must be an integer.',
        },
      },
    },
    start_datetime: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Start datetime is required.',
        },
        isDate: {
          msg: 'Start datetime must be a valid date.',
        },
      },
    },
    end_datetime: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'End datetime is required.',
        },
        isDate: {
          msg: 'End datetime must be a valid date.',
        },
        isAfterStartDatetime(value) {
          if (value <= this.start_datetime) {
            throw new Error('End datetime must be after the start datetime.');
          }
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Event',
    timestamps: true,
  });
  return Event;
};