const db = require('../data/db-config');

async function getRecipeById(recipe_id) {
   const recipeRows = await db('recipes as r')
   .leftJoin('steps as st', 'r.recipe_id', 'st.recipe_id')
   .leftJoin('step_ingredients as si', 'si.step_id', 'st.step_id')
   .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
   .select(
      'r.recipe_id', 
      'r.recipe_name',
      'st.step_id', 
      'st.step_number',
      'st.step_instructions', 
      'i.ingredient_id',
      'i.ingredient_name',
      'si.quantity'
   )
   .orderBy('st.step_number')
   .where('st.recipe_id', recipe_id)

   const result = {
      recipe_id: recipeRows[0].recipe_id,
      recipe_name: recipeRows[0].recipe_name,
      steps: recipeRows.reduce((acc, row) => {
         if(!row.ingredient_id) {
            return acc.concat({
               step_id: row.step_id, 
               step_number: row.step_number, 
               step_instructions: row.step_instructions, 
            })
         }
         if(row.ingredient_id && !acc.find(step => step.step_id === row.step_id)) {
            return acc.concat({
               step_id: row.step_id, 
               step_number: row.step_number, 
               step_instructions: row.step_instructions, 
               ingredients: [
                {
                  ingredient_id: row.ingredient_id,
                  ingredient_name: row.ingredient_name,
                  quantity: row.quantity
                }
              ]
            })
         }
         const current = acc.find(step => step.step_id === row.step_id) 
         current.ingredients.push({
            ingredient_id: row.ingredient_id,
                  ingredient_name: row.ingredient_name,
                  quantity: row.quantity
         })
         return acc 
      }, [])
   }

 

   console.log(result)

   return result

}

module.exports = {
   getRecipeById
  };