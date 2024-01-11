import MealItem from '@/components/page-components/meals/meal-item/meal-item';
import classes from './meal-grid.module.css';

export default function MealsGrid({meals}) {
    return <ul className={classes.meals}>
        {meals.map((meal) => (
            <li key={meal.id}>
                <MealItem meal={meal} />
            </li>
        ))}
    </ul>
}