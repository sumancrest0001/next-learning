import Link from 'next/link';
import Image from 'next/image';

import classes from './meal-item.module.css';
import { Meal } from '@/common/types';
export default function MealItem({meal}: {meal: Meal}): React.ReactElement {
  const { title, slug, image, summary, creator } = meal;
  console.log("🚀 ~ MealItem ~ meal:", meal)
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}