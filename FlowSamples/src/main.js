// @flow

import _ from "lodash";

var pizzas = [
  { title: 'Margherita', vegetarian: true },
  { title: 'Pepperoni', vegetarian: false },
  { title: 'Four cheese', vegetarian: true },
  { title: 'Hawaiian', vegetarian: false },
];

function vegetarianPizzas() {
  return _.find(pizzas, {vegetarian: true});
}