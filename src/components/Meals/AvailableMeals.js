import Card from '../UI/card';
import classes from './AvailableMeals.module.css'

import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pasta",
    description: "tommato pasta",
    price: 18.99,
  },
  {
    id: "m2",
    name: "Rice",
    description: "tommato Rice",
    price: 18.99,
  },
  {
    id: "m3",
    name: "Bread",
    description: "tommato bread",
    price: 18.99,
  },
];

const AvailableMeals = ()=>{
const mealsList = DUMMY_MEALS.map(meal=>(
<MealItem
key={meal.id}
name={meal.name}
description={meal.description}
price={meal.price}
/>));
    return <section>
        <Card>
         {mealsList}   
        </Card>
    </section>
};

export default AvailableMeals;