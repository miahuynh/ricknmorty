import React from 'react';

const SearchBox = () => {
    return (
        <div className='searchBox'> 
            <input 
            className ='textBox' 
            type='search'
            placeholder='search characters'
            />
        </div>
    );
}

export default SearchBox;