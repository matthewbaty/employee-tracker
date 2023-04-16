// packages
const inquirer = require('inquirer');
const express = require('express');
const table = require('console.table');
const db = require('./config/connection');
const sequelize = require('./config/connection');

// port
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server now listening at http://localhost:${PORT}`));
  });