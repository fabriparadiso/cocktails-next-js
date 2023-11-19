import type { Drink } from "../types/drink";
import { DrinkItem } from "../components/DrinkItem";

export default async function DrinkDetail({ params }: any) {
  const { id } = params;
  const data: any = await getDetail(id);
  const drink: Drink = data.drinks[0];
  console.log(drink);
  return <DrinkItem {...drink} />;
}

export async function getDetail(id: string) {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  if (!res.ok) {
    throw new Error(`Failed to fetch data from ID: ${id}`);
  }
  return res.json();
}
