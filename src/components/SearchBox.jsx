import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
	return (
			<div className='searchBox'> 
					<input 
					className ='textBox' 
					type='search'
					placeholder='Wubba lubba dub dub!'
					onChange={searchChange}
					/>
			</div>
	);
}

export default SearchBox;