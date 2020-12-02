import React, { useState } from 'react'
import { View, Text } from 'react-native'
import RestaurantInfo from '../Resuseables/RestaurantInfo'
import MapA from "../Map/MapA";


const DetailsContainer = (props) => {
    console.log(props.route.params)
    const { restaurant } = props.route.params;
    const [Longitude, setLongitude] = useState(restaurant.longitude);
    const [Latitude, setLatitude] = useState(restaurant.latitude);

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
                    <MapA longitudeOfRes={Longitude} latitudeOfRes={Latitude} />
                </View>
            </View>

        </View>

    )
}



export default DetailsContainer
