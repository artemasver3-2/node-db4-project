const recipes = [
  { recipe_name: 'Garlic Butter Pasta' },
  { recipe_name: 'Pasta Primavera' },
  { recipe_name: 'One-Pot Tomato Basil Pasta' },
];

const steps = [
  //1
  {
    step_number: 1,
    step_instructions:
      'Cook the pasta according to package instructions; drain and set aside.',
    recipe_id: 1,
  },
  //2
  {
    step_number: 2,
    step_instructions:
      'In the same pot, melt butter over medium heat. Add minced garlic and sauté for 1-2 minutes until fragran t.',
    recipe_id: 1,
  },
  //3
  {
    step_number: 3,
    step_instructions:
      'Toss the cooked pasta with the garlic butter. Season with salt and pepper.',
    recipe_id: 1,
  },
  //4
  {
    step_number: 4,
    step_instructions:
      'Serve with grated Parmesan and chopped parsley if desired.',
    recipe_id: 1,
  },
  //5
  {
    step_number: 1,
    step_instructions:
      'Cook the pasta according to package instructions; drain and set aside.',
    recipe_id: 2,
  },
  //6
  {
    step_number: 2,
    step_instructions:
      'In a large skillet, heat olive oil over medium heat. Add vegetables and sauté for 5-7 minutes until tender .',
    recipe_id: 2,
  },
  //7
  {
    step_number: 3,
    step_instructions:
      'Add the cooked pasta to the skillet, along with Italian seasoning, salt, and pepper. Toss to combine.',
    recipe_id: 2,
  },
  //8
  {
    step_number: 4,
    step_instructions: 'Serve with grated Parmesan if desired',
    recipe_id: 2,
  },
  //9
  {
    step_number: 1,
    step_instructions:
      'In a large pot, combine spaghetti, diced tomatoes (with juice), vegetable broth, onion, garlic, and a pinch of salt and pepper.',
    recipe_id: 3,
  },
  //10
  {
    step_number: 2,
    step_instructions:
      'Bring to a boil, then reduce heat and simmer for about 10-12 minutes until pasta is cooked and liquid is mostly absorbed.',
    recipe_id: 3,
  },
  //11
  {
    step_number: 3,
    step_instructions: 'Stir in fresh basil before serving.',
    recipe_id: 3,
  },
];

const ingredients = [
  { ingredient_name: 'Spaghetti', ingredient_unit: 'oz' },
  { ingredient_name: 'Butter', ingredient_unit: 'tbsp' },
  { ingredient_name: 'Garlic, minced', ingredient_unit: 'oz' },
  { ingredient_name: 'Salt', ingredient_unit: 'tbsp' },
  { ingredient_name: 'Pepper', ingredient_unit: 'tbsp' },
  { ingredient_name: 'Parmesan cheese', ingredient_unit: 'oz' },
  { ingredient_name: 'Fresh parsley ', ingredient_unit: 'oz' },
  { ingredient_name: 'Penne', ingredient_unit: 'oz' },
  { ingredient_name: 'Mixed Vegetables', ingredient_unit: 'cups' },
  { ingredient_name: 'Olive Oil', ingredient_unit: 'tbsp' },
  { ingredient_name: 'Italian Seasoning', ingredient_unit: 'tbsp' },
  { ingredient_name: 'Diced Tomatoes', ingredient_unit: 'cups' },
  { ingredient_name: 'Vegetable Broth', ingredient_unit: 'cups' },
  { ingredient_name: 'Onion', ingredient_unit: '' },
  { ingredient_name: 'Basil', ingredient_unit: '' },
];

const step_ingredients = [
  //Garlic Butter Pasta
  { step_id: 1, ingredient_id: 1, quantity: 8 },
  { step_id: 2, ingredient_id: 2, quantity: 4 },
  { step_id: 2, ingredient_id: 3, quantity: 0.4 },
  { step_id: 3, ingredient_id: 4, quantity: 0.1 },
  { step_id: 3, ingredient_id: 5, quantity: 0.2 },
  { step_id: 4, ingredient_id: 6, quantity: 0.4 },
  { step_id: 4, ingredient_id: 7, quantity: 0.1 },
  //Pasta Primavera
  { step_id: 5, ingredient_id: 1, quantity: 8 },
  { step_id: 6, ingredient_id: 9, quantity: 14.5 },
  { step_id: 6, ingredient_id: 10, quantity: 2 },
  { step_id: 7, ingredient_id: 11, quantity: 0.3 },
  { step_id: 7, ingredient_id: 4, quantity: 0.2 },
  { step_id: 7, ingredient_id: 5, quantity: 0.4 },
  { step_id: 8, ingredient_id: 6, quantity: 0.1 },
  //One-Pot Tomato Basil Pasta
  { step_id: 9, ingredient_id: 8, quantity: 12 },
  { step_id: 9, ingredient_id: 12, quantity: 14.5 },
  { step_id: 9, ingredient_id: 13, quantity: 4 },
  { step_id: 9, ingredient_id: 14, quantity: 1 },
  { step_id: 9, ingredient_id: 3, quantity: 0.4 },
  { step_id: 10, ingredient_id: 4, quantity: 0.2 },
  { step_id: 10, ingredient_id: 5, quantity: 0.4 },
  { step_id: 11, ingredient_id: 15, quantity: 0.1 },
];

exports.seed = async function (knex) {
  await knex('recipes').insert(recipes);
  await knex('steps').insert(steps);
  await knex('ingredients').insert(ingredients);
  await knex('step_ingredients').insert(step_ingredients);
};
