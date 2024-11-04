const express = require('express')
const Recipes = require('./model')
const  { checkRecipeId } = require('./middleware');

const RecipesRouter = express.Router()


  RecipesRouter.get('/:id', checkRecipeId, (req, res, next) => {
    const recipe_id  = req.params.id
    Recipes.getRecipeById(recipe_id)
      .then(recipe => {
        res.json(recipe)
      })
      .catch(next)
  })
  
module.exports = RecipesRouter
;