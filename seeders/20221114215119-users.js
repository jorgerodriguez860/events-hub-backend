'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        user_id: '1',
        host: true,
        username: 'host1',
        password: 'goodpassword',
        fname: 'Egbert',
        lname: 'Albinson',
        location: 'Nashville',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: '2',
        host: true,
        username: 'host2',
        password: 'canthackme',
        fname: 'Austyn',
        lname: 'Wash',
        location: 'Atlanta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: '3',
        host: false,
        username: 'user1',
        password: 'imcool',
        fname: 'Edwena',
        lname: 'Elvis',
        location: 'Atlanta',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: '4',
        host: false,
        username: 'user2',
        password: 'mybirthday',
        fname: 'Jonie',
        lname: 'Adamson',
        location: 'Nashville',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        user_id: '5',
        host: false,
        username: 'user3',
        password: 'passwordnotbackwards',
        fname: 'Marshal',
        lname: 'Leyton',
        location: 'Richmond',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
