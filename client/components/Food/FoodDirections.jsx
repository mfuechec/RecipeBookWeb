import React from 'react';
import { Text, StyleSheet, View, ScrollView, ImageBackground } from 'react-native';

const FoodDirections = props => {
    var instructionList = props.food.instructions.split('.');
    let instructions = [];
    instructionList.map((item, i) => {
        if (item.length !== 0) {
            instructionList[i] = item.trim();
            instructions.push(
                <View>
                    <Text style={styles.step}>Step {i + 1}</Text>
                    <Text style={styles.instruction}>{instructionList[i]}.</Text>
                </View>
            );
        }
    })
    return (
        <ScrollView source={require('/Users/mfuechec/Desktop/RecipeBook/assets/Herbs.jpg')} style={styles.scrollView}>
            <View source={require('/Users/mfuechec/Desktop/RecipeBook/assets/Herbs.jpg')} style={styles.view}>
                <Text style={styles.text}>Directions:</Text>
                {instructions}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        height: '100%',
        width: '100%'
    },
    text: {
        fontSize: 45,
        alignSelf: 'center'
    },
    step: {
        marginTop: '5%',
        fontSize: 25
    },
    instruction: {
        fontSize: 25,
        marginLeft: '5%'
    },
    scrollView: {
        height: '100%',
        width: '100%',
        backgroundColor: '#EEEEEE'
    }
})

export default FoodDirections;