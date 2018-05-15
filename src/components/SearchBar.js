import React from 'react';

const SearchBar = ({ searchChange }) => {
    return (
        <div>
            <input 
            className='pa3 bb b--washed-green bg-lightest-blue' 
            placeholder='Search for a kitty' 
            type='search'
            onChange={ searchChange }
            />
        </div>
    );
}

export default SearchBar;