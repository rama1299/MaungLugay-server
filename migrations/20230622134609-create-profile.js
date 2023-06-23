'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      full_name: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.INTEGER
      },
      date_of_birth: {
        type: Sequelize.DATE
      },
      gender: {
        type: Sequelize.STRING
      },
      bio: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.INTEGER
      },
      weight: {
        type: Sequelize.DECIMAL
      },
      belt: {
        type: Sequelize.STRING
      },
      coach_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Profiles');
  }
};