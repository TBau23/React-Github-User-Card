import React from 'react';

const SearchBar = (props) => {

    return(
        <div>
            <input
            className='pa3 ba b--green bg-lightest-blue'
            type='search'
            placeholder='search followers by username'
            onChange={props.searchChange}
            />
        </div>
    )
}

export default SearchBar;