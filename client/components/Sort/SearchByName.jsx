import React, { useState } from 'react';

const SearchByName = (props) => {
    const [searchText, setSearchText] = useState('');

    return (
        <div id='SearchByNameContainer'>
            <input
                id='SearchByNameInput'
                placeholder='Search by name'
                onChange={(e) => setSearchText(e.target.value)}
            />
            <div id='SearchByNameSubmitButton' onClick={() => props.manageAPICalls.searchByName(searchText)}>Submit</div>
        </div>
    )
}

export default SearchByName;