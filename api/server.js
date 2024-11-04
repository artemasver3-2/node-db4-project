const express = require('express');

const RecipesRouter = require('./Recipesrouter')

const server = express();

server.use(express.json());

server.use('/api/recipes', RecipesRouter);

module.exports = server;