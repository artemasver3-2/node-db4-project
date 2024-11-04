const db = require('../data/db-config');

exports.checkRecipeId = async (req, res, next) => {
  try {
    const taken = await db('recipes')
      .where('recipe_id',  req.params.id)
      .first();
    if (!taken) {
      res.status(404).json({
        message: `Recipe with recipe_id ${req.params.id} not found!`,
      });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

