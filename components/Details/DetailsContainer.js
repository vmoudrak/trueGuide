import React from 'react'
import { View, Text } from 'react-native'
import RestaurantInfo from '../Resuseables/RestaurantInfo'
import Map from "../Resuseables/Map";


const DetailsContainer = (props) => {
    console.log(props.route.params)
    const { restaurant } = props.route.params;
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
                        <Map />
                </View>
            </View>

        </View>

    )
}



export default DetailsContainer
