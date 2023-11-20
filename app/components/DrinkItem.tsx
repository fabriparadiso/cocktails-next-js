"use client";

import React from "react";
import { Card, CardHeader, CardBody, Image, Link } from "@nextui-org/react";
import { Drink } from "../types/drink";
import { usePathname } from "next/navigation";
import { getIngredients } from "../utils/helpers";
import type { Ingredient } from "../types/ingredient";

export function DrinkItem(drink: Drink) {
  const pathname: string = usePathname();
  const isDetailPage: boolean = pathname != "/" ? true : false;
  const MAX_INGREDIENTS = 15;
  return (
    <div className="flex justify-center align-center">
      <Card className="py-4 mx-auto flex">
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large">{drink.strDrink}</h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src={drink.strDrinkThumb}
            width={270}
          />
          {isDetailPage ? (
            <article className="ml-4">
              <div className="flex flex-col">
                <p className="text-tiny uppercase font-bold">Ingredients</p>
                {getIngredients(drink, MAX_INGREDIENTS).map(
                  (ingredient: Ingredient) => {
                    return (
                      <span key={ingredient.strIngredient}>
                        {ingredient.strIngredient} ({ingredient.strMeasure})
                      </span>
                    );
                  }
                )}
              </div>
            </article>
          ) : (
            <div className="flex flex-col items-start">
              <button className="bg-purple-900 text-white hover:bg-blue-400 font-bold py-2 px-4 mt-3 rounded">
                <Link href={`/${encodeURIComponent(drink.idDrink)}`}>
                  See more details
                </Link>
              </button>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
