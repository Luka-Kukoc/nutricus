import { supabase } from '../../utils/supabaseClient'

const fetchMeals = async (userID) => {
  const id = 1
  const { data: Recipe, error } = await supabase
    .from('Recipe')
    .select('Name, RecipeIngredient(id, "*", Ingredients("*"))')
  if (error) console.error('error', error)
  else return Recipe
}
export default async function handler(req, res) {
  const meals = await fetchMeals()
  res.status(200).json(meals)
}
