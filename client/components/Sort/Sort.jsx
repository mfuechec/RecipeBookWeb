import React from 'react';
import SortNav from './SortNav.jsx';
import SearchByName from './SearchByName.jsx';
import SearchByCategory from './SearchByCategory.jsx';
import SearchByArea from './SearchByArea.jsx';
import SearchByIngredients from './SearchByIngredients.jsx';
import LatestMeals from './LatestMeals.jsx';

const Sort = (props) => {
    return (
        <div
            id='SortModal'
            style={{ zIndex: props.isModalVisible[0], display: props.isModalVisible[1] }}
        // onBackdropPress={props.manageModal.closeModal}
        // animationIn='slideInRight'
        // animationOut='slideOutRight'
        >
            <div id='SortNav'>
                <SortNav manageAPICalls={props.manageAPICalls} manageModal={props.manageModal} />
            </div>
            <div id='SearchByName'>
                <SearchByName manageModal={props.manageModal} manageAPICalls={props.manageAPICalls} whatIsSelected={props.whatIsSelected} />
            </div>
            <div id='SearchByCategory'>
                <SearchByCategory whatIsSelected={props.whatIsSelected} manageAPICalls={props.manageAPICalls} />
            </div>
            <div id='SearchByArea'>
                <SearchByArea whatIsSelected={props.whatIsSelected} manageAPICalls={props.manageAPICalls} />
            </div>
            <div id='SearchByIngredients'>
                <SearchByIngredients manageAPICalls={props.manageAPICalls} whatIsSelected={props.whatIsSelected} />
            </div>
            <div id='LatestMeals'>
                <LatestMeals manageAPICalls={props.manageAPICalls} whatIsSelected={props.whatIsSelected} />
            </div>
        </div>
    )
}

// const styles = StyleSheet.create({
//     modal: {
//         marginTop: hp('15%'),
//         marginLeft: wp('50%'),
//         backgroundColor: 'white'
//     },
//     sortContainer: {
//         height: '100%',
//         width: '100%'
//     },
//     sortNav: {
//         height: '15%'
//     },
//     searchByName: {
//         height: '17.5%',
//         backgroundColor: 'white',
//         marginBottom: '10%',
//         marginLeft: '10%',
//         marginRight: '10%'
//     },
//     searchByCategory: {
//         height: '15%',
//         backgroundColor: 'white',
//         marginBottom: '10%',
//         marginLeft: '10%',
//         marginRight: '10%'
//     },
//     searchByArea: {
//         height: '15%',
//         backgroundColor: 'white',
//         marginBottom: '10%',
//         marginLeft: '10%',
//         marginRight: '10%'
//     },
//     searchByIngredients: {
//         height: '15%',
//         backgroundColor: 'white',
//         marginBottom: '10%',
//         marginLeft: '10%',
//         marginRight: '10%'
//     },
//     latestMeals: {
//         height: '15%',
//         backgroundColor: 'white',
//         marginBottom: '10%',
//         marginLeft: '10%',
//         marginRight: '10%'
//     }
// })

export default Sort;