import React from 'react'
import { View, Text } from 'react-native'
import RestaurantInfo from '../Resuseables/RestaurantInfo'
import Share from '../Resuseables/Share';
import Map from "../Resuseables/Map"

const DetailsContainer = (props) => {
    console.log(props.route.params)
    const {restaurant} = props.route.params;
    return (
        <View>
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

                <Share></Share>
                </View>
            </View>
            <View>
                <Map></Map>
            </View>
        </View>
    )
}

export default DetailsContainer
