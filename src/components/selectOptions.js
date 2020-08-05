import React, { useState, useEffect } from 'react';



function SelectOptions({ setSelectedBreed }) {

    const [breeds, setBreeds] = useState([]);
    const getBreeds = () => {
        return fetch('https://dog.ceo/api/breeds/list/all');
    };

    useEffect(() => {

        getBreeds()
            .then(data => data.json())
            .then(data => Object.keys(data.message))
            .then(data => setBreeds(data))

    }, []);

    return (
        <div className="select-options">
            <label htmlFor="breed">Breed:</label>
            <select name="breed" id="breed" onChange={(e) => setSelectedBreed(e.target.value)}>
                <option value="">Please choose a breed</option>
                {breeds.map(breed => <option value={breed} key={breed}>{breed}</option>)}
            </select>
        </div>
    );
}

export default SelectOptions;
