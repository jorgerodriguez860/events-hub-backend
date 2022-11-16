'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [
      {
        event_id: '1',
        year: 2022,
        month: 12,
        day: 3,
        hour: 18,
        minute: 0,
        type: 'house party',
        title: 'Feeling the Jolly Spirit',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem ut enim placeat laudantium amet modi dignissimos sit, esse, natus ad quis necessitatibus iusto vitae, officia recusandae animi pariatur. Neque?',
        city: 'Nashville',
        latitude: 36.166393,
        longitude: -86.780709,
        user_id: 'host1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        event_id: '2',
        year: 2022,
        month: 11,
        day: 19,
        hour: 17,
        minute: 30,
        type: 'house party',
        title: 'Friendsgiving',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem ut enim placeat laudantium amet modi dignissimos sit, esse, natus ad quis necessitatibus iusto vitae, officia recusandae animi pariatur. Neque?',
        city: 'Nashville',
        latitude: 36.161266,
        longitude: -86.791662,
        user_id: 'host1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '3',
        year: 2022,
        month: 12,
        day: 17,
        hour: 16,
        minute: 0,
        type: 'hangout',
        title: 'Holiday Vibes',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem ut enim placeat laudantium amet modi dignissimos sit, esse, natus ad quis necessitatibus iusto vitae, officia recusandae animi pariatur. Neque?',
        city: 'Atlanta',
        latitude: 33.772047,
        longitude: -84.412020,
        user_id: 'host2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '4',
        year: 2023,
        month: 1,
        day: 2,
        hour: 6,
        minute: 0,
        type: 'workout',
        title: 'Annual Fake It for Three Days at the Gym',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem ut enim placeat laudantium amet modi dignissimos sit, esse, natus ad quis necessitatibus iusto vitae, officia recusandae animi pariatur. Neque?',
        city: 'Nashville',
        latitude: 36.157312,
        longitude: -86.782658,
        user_id: 'host1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '5',
        year: 2023,
        month: 1,
        day: 1,
        hour: 15,
        minute: 0,
        type: 'self improvement',
        title: 'Goals for the New Year',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem ut enim placeat laudantium amet modi dignissimos sit, esse, natus ad quis necessitatibus iusto vitae, officia recusandae animi pariatur. Neque?',
        city: 'Atlanta',
        latitude: 33.775319,
        longitude: -84.385471,
        user_id: 'host2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '6',
        year: 2023,
        month: 3,
        day: 12,
        hour: 6,
        minute: 0,
        type: 'adventure',
        title: 'White Water Kayaking',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem ut enim placeat laudantium amet modi dignissimos sit, esse, natus ad quis necessitatibus iusto vitae, officia recusandae animi pariatur. Neque?',
        city: 'Richmond',
        latitude: 37.539238,
        longitude: -77.414435,
        user_id: 'host2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '7',
        year: 2023,
        month: 5,
        day: 22,
        hour: 10,
        minute: 0,
        type: 'celebration',
        title: 'Family Graduation',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem ut enim placeat laudantium amet modi dignissimos sit, esse, natus ad quis necessitatibus iusto vitae, officia recusandae animi pariatur. Neque?',
        city: 'Atlanta',
        latitude: 33.753680,
        longitude: -84.374313,
        user_id: 'host2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '8',
        year: 2023,
        month: 2,
        day: 21,
        hour: 14,
        minute: 45,
        type: 'relaxation',
        title: 'Taking in the Views',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem ut enim placeat laudantium amet modi dignissimos sit, esse, natus ad quis necessitatibus iusto vitae, officia recusandae animi pariatur. Neque?',
        city: 'Richmond',
        latitude: 37.520439,
        longitude: -77.435932,
        user_id: 'host1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '9',
        year: 2023,
        month: 7,
        day: 4,
        hour: 19,
        minute: 0,
        type: 'celebration',
        title: 'Get Turnt, America!',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem ut enim placeat laudantium amet modi dignissimos sit, esse, natus ad quis necessitatibus iusto vitae, officia recusandae animi pariatur. Neque?',
        city: 'Nashville',
        latitude: 36.159662,
        longitude: -86.771886,
        user_id: 'host1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '10',
        year: 2023,
        month: 6,
        day: 17,
        hour: 12,
        minute: 0,
        type: 'relaxation',
        title: 'Enjoying the Summer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem ut enim placeat laudantium amet modi dignissimos sit, esse, natus ad quis necessitatibus iusto vitae, officia recusandae animi pariatur. Neque?',
        city: 'Richmond',
        latitude: 37.548901,
        longitude: -77.461377,
        user_id: 'host2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '11',
        year: 2022,
        month: 12,
        day: 3,
        hour: 18,
        minute: 0,
        type: 'house party',
        title: `Will's 21st birthday`,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem ut enim placeat laudantium amet modi dignissimos sit, esse, natus ad quis necessitatibus iusto vitae, officia recusandae animi pariatur. Neque?',
        city: 'Nashville',
        latitude: 36.156393,
        longitude: -86.770709,
        user_id: 'host1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '12',
        year: 2022,
        month: 12,
        day: 3,
        hour: 18,
        minute: 0,
        type: 'house party',
        title: `Graduation Party`,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem ut enim placeat laudantium amet modi dignissimos sit, esse, natus ad quis necessitatibus iusto vitae, officia recusandae animi pariatur. Neque?',
        city: 'Nashville',
        latitude: 36.047615,
        longitude: -86.779976,
        user_id: 'host1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '13',
        year: 2022,
        month: 11,
        day: 16,
        hour: 10,
        minute: 0,
        type: 'sports event',
        title: 'Flag Football Game',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem ut enim placeat laudantium amet modi dignissimos sit, esse, natus ad quis necessitatibus iusto vitae, officia recusandae animi pariatur. Neque?',
        city: 'Atlanta',
        latitude: 33.777096,
        longitude: -84.380207,
        user_id: 'host2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '14',
        year: 2022,
        month: 11,
        day: 16,
        hour: 10,
        minute: 0,
        type: 'party',
        title: 'Tailgate Party',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem ut enim placeat laudantium amet modi dignissimos sit, esse, natus ad quis necessitatibus iusto vitae, officia recusandae animi pariatur. Neque?',
        city: 'Atlanta',
        latitude: 33.757314,
        longitude: -84.465200,
        user_id: 'host2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        event_id: '15',
        year: 2022,
        month: 11,
        day: 16,
        hour: 10,
        minute: 0,
        type: 'celebration',
        title: 'Birthday BBQ',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam autem ut enim placeat laudantium amet modi dignissimos sit, esse, natus ad quis necessitatibus iusto vitae, officia recusandae animi pariatur. Neque?',
        city: 'Atlanta',
        latitude: 33.716808,
        longitude: -84.352985,
        user_id: 'host2',
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('events', null, {});
  }
};