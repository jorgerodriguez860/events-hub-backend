'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('participants', [
      {
        event_id: '1', // Nashville
        user_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '2', // Nashville
        user_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '2', // Nashville
        user_id: '4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '1', // Nashville
        user_id: '4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '1', // Nashville
        user_id: '5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '3', // Atlanta
        user_id: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '3', // Atlanta
        user_id: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '4', // Nashville
        user_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '5', // Atlanta
        user_id: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '5', // Atlanta
        user_id: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '5', // Atlanta
        user_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '5', // Atlanta
        user_id: '5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '5', // Atlanta
        user_id: '4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '6', // Richmond
        user_id: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '6', // Richmond
        user_id: '5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '6', // Richmond
        user_id: '4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '7', // Atlanta
        user_id: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '7', // Atlanta
        user_id: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '8', // Richmond
        user_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '8', // Richmond
        user_id: '5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '9', // Nashville
        user_id: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '9', // Nashville
        user_id: '4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '10', // Richmond
        user_id: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '10', // Richmond
        user_id: '5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('participants', null, {});
  }
};
