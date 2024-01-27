'use client';

import classes from './share-page.module.css';
import ImagePicker from '@/atoms/image-picker/image-picker';
import { shareMeal } from '@/lib/actions';
import MealsFormSubmit from '@/atoms/meal-form-submit/MealFormSubmit';
import { useFormState } from 'react-dom';


const initialState = {message: ''};

export default function ShareMealPage():React.ReactNode {

  const [formState, formAction] = useFormState(shareMeal, initialState)
    return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={formAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows={10}
              required
            ></textarea>
          </p>
          <ImagePicker label={"food image"} name="image" />
          {formState?.message && <p>{formState?.message}</p>}
          <p className={classes.actions}>
            <MealsFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}