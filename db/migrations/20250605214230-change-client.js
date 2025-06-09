'use strict';

const {CLIENT_TABLE } = require('../models/client.models')
const {DataTypes} = require('sequelize')

module.exports = {
  async up(queryInterface) {

    await queryInterface.changeColumn(CLIENT_TABLE, 'user_id', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    })

  },

  async down(queryInterface) {

  }
};
