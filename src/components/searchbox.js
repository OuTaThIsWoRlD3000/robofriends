import React from 'react';

const SearchBox = ({ searchfield , searchchanges }) => {
    return(
        <div className='pa2'> 
            <input
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='Search Robots' 
            value={searchfield}
            onChange={searchchanges}
            />

        </div>
    )
}
export default SearchBox;