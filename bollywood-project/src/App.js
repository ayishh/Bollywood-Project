import React,{ useState } from 'react';
import CharacterList from './components/CharacterList';
import './App.css';

function App() {
    const [filter, setFilter] = useState('')    //track the selected filter tag

    const handleFilterChange = (tag) => {setFilter(tag);};

    return (
        <div className="App">
            <header className="app-header">
                <h1>Bollywood Characters</h1>
                <p>A collection of iconic characters from Bollywood Movies</p>
            </header>

            {/* Filter buttons */}
            <div className = "filter-buttons">
                <button onClick={() => handleFilterChange('')}>All</button>
                <button onClick={() => handleFilterChange('hero')}>Hero</button>
                <button onClick={() => handleFilterChange('villain')}>Villain</button>
                <button onClick={() => handleFilterChange('romance')}>Romance</button>
                <button onClick={() => handleFilterChange('action')}>Action</button>
                <button onClick={() => handleFilterChange('classic')}>Classic</button>
            </div>



            <CharacterList filter={filter} />
        </div>
    );
}

export default App;