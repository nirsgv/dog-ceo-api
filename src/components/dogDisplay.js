import React, { useState, useEffect } from 'react';

const getBreedImages = (dogBreed) => {
    return fetch(`https://dog.ceo/api/breed/${dogBreed}/images`);
};

function DogDisplay({ selectedBreed }) {

    const [images, setImages] = useState([]);

    useEffect(() => {

        getBreedImages(selectedBreed = 'hound')
            .then(data => data.json())
            .then(data => data.message)
            .then(data => setImages(data))

    }, [selectedBreed]);

    console.log(images);
    return (
        <>
        <h1>{selectedBreed}</h1>
        <img className="select-options" src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg" />
        </>
    );
}

export default DogDisplay;
