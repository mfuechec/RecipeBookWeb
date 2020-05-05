import React from 'react';

const SearchByArea = (props) => {
    let selection = [];
    let text = '';
    if (props.whatIsSelected === 'food') {
        selection = [
            {
                value: "American"
            },
            {
                value: "British"
            },
            {
                value: "Canadian"
            },
            {
                value: "Chinese"
            },
            {
                value: "Dutch"
            },
            {
                value: "Egyptian"
            },
            {
                value: "French"
            },
            {
                value: "Greek"
            },
            {
                value: "Indian"
            },
            {
                value: "Irish"
            },
            {
                value: "Italian"
            },
            {
                value: "Jamaican"
            },
            {
                value: "Japanese"
            },
            {
                value: "Kenyan"
            },
            {
                value: "Malaysian"
            },
            {
                value: "Mexican"
            },
            {
                value: "Moroccan"
            },
            {
                value: "Russian"
            },
            {
                value: "Spanish"
            },
            {
                value: "Thai"
            },
            {
                value: "Tunisian"
            },
            {
                value: "Turkish"
            },
            {
                value: "Unknown"
            },
            {
                value: "Vietnamese"
            }
        ];
        text = `Search for recipes by origin.`;
    } else {
        selection = [
            {
                value: 'Alcoholic'
            },
            {
                value: 'Non alcoholic'
            },
            {
                value: 'Optional alcohol'
            }
        ];
        text = `Search for recipes by alcohol content.`;
    }

    return (
        <div id='SearchByAreaContainer'>
            <div id='SearchByAreaText'>{text}</div>
            <div id='SearchByAreaDrowdown'>Dropdown</div>
        </div>
    )
}

// <Dropdown
//     onChangeText={(value) => { props.manageAPICalls.searchWithFilter(value, 'area') }}
//     style={styles.dropdown}
//     label='Select origin'
//     data={selection}
// />

export default SearchByArea;