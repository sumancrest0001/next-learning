'use server';
import { isInvalidText } from "@/app/utils/helper-functions";
import { Meal } from "@/common/types";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";
  
export interface MealFormData {
    title: string;
    image: File;
    summary: string;
    creator: string;
    creator_email: string;
    instructions: string;
}
  
  export async function shareMeal(state: {message: string}, formData: FormData): Promise<{message: string}> {
    const meal: MealFormData = {
        title: formData.get('title') as string,
        summary: formData.get('summary') as string,
        instructions: formData.get('instructions') as string,
        image: formData.get('image') as File,
        creator: formData.get('name') as string,
        creator_email: formData.get('email') as string,
    }
    if(isInvalidText(meal.title)
    || isInvalidText(meal.summary)
    || isInvalidText(meal.instructions)
    || isInvalidText(meal.creator)
    || isInvalidText(meal.creator_email) ) {
        return({message: 'All the required form data are not submitted!'});
    }
    await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
  }