'use strict';

const {ClientSchema, CLIENT_TABLE} = require('../models/client.models')
module.exports = {
  async up (queryInterface) {
     await queryInterface.createTable(CLIENT_TABLE,  ClientSchema)
  },

  async down (queryInterface) {
    await queryInterface.dropTable(CLIENT_TABLE)
  }
};
