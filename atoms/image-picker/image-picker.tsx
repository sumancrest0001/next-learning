'use client';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

interface ImagePickerProps {
    label: String,
    name: string
};
export default function ImagePicker({label, name}: ImagePickerProps): React.ReactNode {
  const imageRef = useRef<HTMLInputElement | null>(null);
  const [pickedImage, setPickedImage] = useState<string | null>();

    const handleOnClick = () => {
        if(imageRef?.current) {
            imageRef.current.click()
        }
    }
   
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e?.target?.files?.[0];
        if(!file) {
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = () => {
            if(typeof fileReader.result === 'string') {
                setPickedImage(fileReader.result)
            }
        }
        fileReader.readAsDataURL(file);

    }
    return(
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {pickedImage ? 
                    <Image src={pickedImage}
                        alt="preview of picked image" 
                        fill
                    />
                    : <p>No Image picked yet.</p>}
                </div>
                <input hidden onChange={handleImageChange} ref={imageRef} className={classes.input} type="file" id="image" accept="image/png, image/jpeg" name={name} />
                <button className={classes.button} type="button" onClick={handleOnClick}>Pick an image</button>
            </div>
        </div>
    )
}