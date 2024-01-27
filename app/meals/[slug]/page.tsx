import React from 'react';
import classes from './meal-details-page.module.css';
import Image from 'next/image';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';
import { Meal } from '@/common/types';

interface MealDetailsPageProps {
    params: {
        slug: string
    }
}
function MealDetailsPage({params}: MealDetailsPageProps) {
    const meal: Meal | undefined = getMeal(params.slug) as Meal | undefined;
    if(!meal) {
        notFound();
    }
    const instructions = meal.instructions.replace(/\n/g, '<br>');
    
    return (
        <>
        <header className={classes.header}>
            <div className={classes.image}>
                <Image src={meal.image} alt="meal thumbnail" fill />  
            </div>
            <div className={classes['header-text']}>
                <h1>{meal.title}</h1>
                <p className={classes.creator}>
                    by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                </p>
                <section className={classes.summary}>{meal.summary}</section>
            </div>
        </header>
        <main>
            <p className={classes.instructions} dangerouslySetInnerHTML={{
                __html: instructions
            }}></p>
        </main>
        </>
    );
}

export default MealDetailsPage;