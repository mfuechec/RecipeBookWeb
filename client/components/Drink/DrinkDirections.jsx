import React from 'react';

const DrinkDirections = props => {
    return (
        <div id='DrinkDirectionsContainer'>
            <Text>{props.drink.name}</Text>
            <Text>{props.drink.type}</Text>
            <Text>{props.drink.instructions}</Text>
            <Text>{props.drink.image}</Text>
            <Text>{props.drink.ingredients}</Text>
            <Text>{props.drink.measurements}</Text>
        </div>
    )
}

// const styles = StyleSheet.create({
//     container: {
//         height: '100%',
//         width: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center'
//     }
// })

export default DrinkDirections;