const { Sequelize } = require('sequelize');
const config = require('../config/config')
require('dotenv').config();

const sequelize = new Sequelize( config.development );

try {
  sequelize.authenticate();
  console.log('Banco de dados conectado');
} catch (error) {
  console.error('Banco de dados não conectado', error);
}

module.exports = { Sequelize, sequelize };