import React, { useState, useEffect } from 'react';
import ImageGallery from "./imageGallery";



function SelectedBreed({ selectedBreed }) {

    const [images, setImages] = useState([]);
    const [preloader, setPreloader] = useState(false);


    const getBreedImages = async (dogBreed) => {
        setPreloader(true);
        try {
            const response = await fetch (`https://dog.ceo/api/breed/${dogBreed}/images`),
                data = await response.json(),
                images = data.message;
            setPreloader(false);
            return images;
        } catch (err) {
            return err;
        }
    };

    useEffect(() => {

        getBreedImages(selectedBreed)
            .then(data => {
                if (data) {
                    setImages(data)
                } else {
                    console.error(data)
                }
            })

    }, [selectedBreed]);

    return (
        <>

        {!preloader ?
            <>
                <h1>{selectedBreed}</h1>
                <ImageGallery images={images}/>
            </>
            : <h1>Wait!</h1>}
        </>
    );
}

export default SelectedBreed;
