import React from 'react';

const SearchByCategory = (props) => {
    let selection = [];
    if (props.whatIsSelected === 'food') {
        selection = [
            {
                value: 'Beef'
            },
            {
                value: 'Breakfast'
            },
            {
                value: 'Chicken'
            },
            {
                value: 'Dessert'
            },
            {
                value: 'Goat'
            },
            {
                value: 'Lamb'
            },
            {
                value: 'Miscellaneous'
            },
            {
                value: 'Pasta'
            },
            {
                value: 'Pork'
            },
            {
                value: 'Seafood'
            },
            {
                value: 'Side'
            },
            {
                value: 'Starter'
            },
            {
                value: 'Vegan'
            },
            {
                value: 'Vegetarian'
            }
        ];
    }
    if (props.whatIsSelected === 'drinks') {
        selection = [
            {
                value: 'Ordinary Drink'
            },
            {
                value: 'Cocktail'
            },
            {
                value: 'Milk / Float / Shake'
            },
            {
                value: 'Other/Unknown'
            },
            {
                value: 'Cocoa'
            },
            {
                value: 'Shot'
            },
            {
                value: 'Coffee / Tea'
            },
            {
                value: 'Homemade Liqueur'
            },
            {
                value: 'Punch / Party Drink'
            },
            {
                value: 'Beer'
            },
            {
                value: 'Soft Drink / Soda'
            }
        ];
    }

    return (
        <div id='SearchByCategoryContainer'>
            <div id='SearchByCategoryText'>Search for recipes by category</div>
            <div id='SearchByCategoryDropdown'>Dropdown</div>
        </div>
    )
}

export default SearchByCategory;