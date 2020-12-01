import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import RestaurantInfo from '../Resuseables/RestaurantInfo'
import Share from '../Resuseables/Share';
import Map from "../Resuseables/Map"

const DetailsContainer = (props) => {
    console.log(props.route.params)
    const {restaurant} = props.route.params;
    return (
        <View style={styles.container}>
            <View>
                <RestaurantInfo restaurant={restaurant}></RestaurantInfo>
            </View>
            <View>
                <View>
                    <Text>
                        {restaurant.details}
                    </Text>
                </View>
                <View>
                    <Share><Text>FB, Twitter, Email goes here</Text></Share>
                </View>
            </View>
            <View>
                <Map/>
            </View>
        </View>
    )
}

export default DetailsContainer

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d2d2f9',
    },
});