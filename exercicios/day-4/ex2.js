// Challenge 2 of 4: Listas aninhadas em um componente.
// Parte 1 > App.js
import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe =>
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map(ingredient =>
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

// Parte 2 > data.js
export const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];