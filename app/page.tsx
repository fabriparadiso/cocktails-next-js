import type { Drink } from "./types/drink";
import React from "react";
import Search from "./components/Search";
import { DrinkList } from "./components/DrinkList";

type HomeProps = {
  searchParams: URLSearchParams;
};

export default async function Home({
  searchParams,
}: {
  searchParams: { query: string };
}) {
  const data: any = await getData();
  const drinks: Drink[] = data.drinks;
  const query = searchParams.query || "";
  return (
    <main>
      <Search placeholder="Search by Cocktail's name" />
      <DrinkList drinks={drinks} query={query} />
    </main>
  );
}

async function getData() {
  const DRINKS_ENDPOINT =
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";
  const res = await fetch(DRINKS_ENDPOINT);
  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${DRINKS_ENDPOINT}`);
  }
  return res.json();
}
