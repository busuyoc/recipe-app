import { async } from 'regenerator-runtime';
import { API_URL } from './config.js';
import { getJSON } from './helpers.js';
export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};
export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`);

    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      imageUrl: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (err) {
    console.error(`${err} 💥💥💥`);
    throw err; // re-throw the error to be handled by the controller // why? // because we want to handle it in the controller, not here
    // how does it work? // when we throw an error, it will be caught by the controller's try-catch block, thus the controller can handle the error gracefully
  }
};
export const loadSearchResults = async function (query) {
  try {
    state.search.query = query;
    const data = await getJSON(`${API_URL}?search=${query}`);
    console.log(data);

    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        title: rec.title,
        publisher: rec.publisher,
        imageUrl: rec.image_url,
      };
    });
  } catch (err) {
    console.log(`${err} 💥💥💥`);
    throw err;
  }
};
// loadSearchResults('pizza'); // for testing purposes, remove this line later
