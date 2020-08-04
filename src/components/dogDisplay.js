import React, { useState, useEffect } from 'react';

const getBreedImages = (dogBreed) => {
    return fetch(`https://dog.ceo/api/breed/${dogBreed}/images`);
};

function DogDisplay({ selectedBreed }) {

    const [images, setImages] = useState([]);

    useEffect(() => {

        getBreedImages(selectedBreed)
            .then(data => data.json())
            .then(data => data.message)
            .then(data => setImages(data))

    }, [selectedBreed]);

    console.log(images);
    return (
        <>
        <h1>{selectedBreed}</h1>
        <img className="select-options" src={images[0]} />
        </>
    );
}

export default DogDisplay;
