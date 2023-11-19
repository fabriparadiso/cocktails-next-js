"use client";
import type { Drink } from "../types/drink";
import { DrinkItem } from "./DrinkItem";
import React from "react";

type DrinkListProps = {
  drinks: Drink[];
  query: string;
};

export function DrinkList(props: DrinkListProps) {
  return (
    <div className="mx-auto grid grid-cols-3 content-center">
      {props.drinks
        ?.filter((element: Drink) =>
          element.strDrink
            .toLocaleLowerCase()
            .includes(props.query.toLocaleLowerCase())
        )
        .map((element: Drink) => (
          <React.Fragment key={element.idDrink}>
            <DrinkItem {...element} />
          </React.Fragment>
        ))}
    </div>
  );
}
