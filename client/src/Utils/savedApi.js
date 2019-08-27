import axios from "axios";

export default {
  // Gets all recipes
  getRecipes: function() {
    return axios.get("/api/saved_recipes");
  },
  // Gets the recipe with the given id
  getRecipe: function(id) {
    return axios.get("/api/saved_recipes/" + id);
  },
  // Deletes the recip with the given id
  deleteRecipe: function(id) {
    return axios.delete("/api/saved_recipes/" + id);
  },
  // Saves a recipe to the database
  saveRecipe: function(recipeData) {
    return axios.post("/api/saved_recipes", recipeData);
  }
};
