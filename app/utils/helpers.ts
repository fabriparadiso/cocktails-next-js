import type { Drink } from "../types/drink";
import type { Ingredient } from "../types/ingredient";

export const getIngredients = (
  drink: Drink,
  quantity: number
): Ingredient[] => {
  const ingredients: Ingredient[] = [];
  for (let i = 1; i <= quantity; i++) {
    const ingredientName = drink[`strIngredient${i}` as keyof typeof drink];
    const measure = drink[`strMeasure${i}` as keyof typeof drink];
    if (ingredientName) {
      const newIngredient: Ingredient = {
        idDrink: drink.idDrink,
        strIngredient: ingredientName,
        strMeasure: measure || "",
      };
      ingredients.push(newIngredient);
    }
  }
  return ingredients;
};
