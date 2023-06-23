'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.belongsTo(models.Categories,
        {
          foreignKey: 'category_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        })

      Article.belongsTo(models.User,
        {
          foreignKey: 'user_id',
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
        })

        Article.belongsTo(models.User,
          {
            foreignKey: 'tag_id',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          })
    }
  }
  Article.init({
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
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Content is required.',
        },
        notEmpty: {
          msg: 'Content cannot be empty.',
        },
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: {
          msg: 'Tag ID must be an integer.',
        },
      },
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        notNull: {
          msg: 'Active status is required.',
        },
        isIn: {
          args: [[true, false]],
          msg: 'Active status must be either true or false.',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Article',
    timestamps: true,
  });
  return Article;
};