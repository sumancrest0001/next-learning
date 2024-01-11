import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/page-components/meals/meals-grid/meal-grid';
import {getMeals} from '@/lib/meals';
import React, { ReactElement, Suspense } from 'react';
import MealsLoadingPage from './loading';

async function Meals(): Promise<React.ReactElement> {
    const meals = await getMeals();
return<MealsGrid meals={meals} />
}

function MealsPage():React.ReactElement {
    return (
        <>
        <header className={classes.header}>
            <h1>
                Delicious meals, created{' '}
                <span className={classes.highlight}>by you</span>
            </h1>
            <p>Choose your favorite recipe and cook it yourself. It is easy and fun</p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share your Favorite Recipe
                </Link>
            </p>
        </header>
        <main className={classes.main}>
            <Suspense fallback={<MealsLoadingPage />}>
                <Meals />
            </Suspense>
        </main>
        </>
    );
}

export default MealsPage;