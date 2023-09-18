const express = require('express');
var bodyParser = require('body-parser');

const {Sequelize} = require('sequelize');

const sequelize = new Sequelize ('dvdrental','postgres','postgres', {
    host:'localhost',
    dialect:'postgres'
});

//testing the connection
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }