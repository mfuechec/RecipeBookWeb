import React, { useState } from 'react';

const SearchByName = (props) => {
    const [searchText, setSearchText] = useState('');

    return (
        <div id='SearchByNameContainer'>
            <div id='SearchByNameText'>Search by name.</div>
            <input
                id='SearchByNameInput'
                placeholder='Search by name'
                onChange={text => setSearchText(text)}
            />
            <div id='SearchByNameSubmitButton' onClick={() => props.manageAPICalls.searchByName(searchText)}>Submit</div>
        </div>
    )
}

export default SearchByName;