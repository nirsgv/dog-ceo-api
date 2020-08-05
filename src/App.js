import React, { useState, useEffect } from 'react';
import SelectOptions from "./components/selectOptions";
import SelectedBreed from "./components/selectedBreed";

function App() {

    const [selectedBreed, setSelectedBreed] = useState([]);

    return (
    <div className="App">
      <header className="App-header">
        <SelectOptions setSelectedBreed={setSelectedBreed}/>
        <SelectedBreed selectedBreed={selectedBreed}/>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

      </header>
    </div>
  );
}

export default App;
