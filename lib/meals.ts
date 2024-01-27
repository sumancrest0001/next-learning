import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import { Meal } from '@/common/types';
import { MealFormData } from './actions';
const db = sql('meals.db');


type MealInputData = Omit <Meal, 'id'>;
export async function getMeals() {
    await new Promise((resolve) => setTimeout(resolve, 10000))
    return db.prepare('SELECT * FROM  meals').all();
}


export function getMeal(slug: string) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}


export async function saveMeal(meal: MealFormData) {
  let mealData: MealInputData;
  const slug = slugify(meal.title, {lower: true});
  const instructions = xss(meal.instructions);
  const extension = meal.image.name.split('.').pop();
  const fileName = `${slug}.${extension}`;
  const imageStream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();
  imageStream.write(Buffer.from(bufferedImage), (err) => {
    if(err) {
      throw new Error('Failed to save the image!');
    }
    const image = `/images/${fileName}`;
    mealData = {
      title: meal.title,
      instructions,
      image,
      slug,
      creator: meal.creator,
      creator_email: meal.creator_email,
      summary: meal.summary
    }
    db.prepare(`
    INSERT INTO meals(title, summary, image, slug, instructions, creator, creator_email)
    VALUES (@title, @summary, @image, @slug, @instructions, @creator, @creator_email)
    `).run(mealData)
  })
}