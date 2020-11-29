import React from 'react'
import { View, Text, Button } from 'react-native'
import RestaurantInfo from './Resuseables/RestaurantInfo'

export default function home({ navigation }) {
    const restaurants = [
        {
            name: "Dinos",
            address: "420 Snp Dogg Court, Toronto",
            number: "416 - 069 - 420",
            image: "./assets/dinos",
            details: "A cozy resauraunt with a very home-y vibe.... Lots of food"
        },
        {
            name: "Ginos",
            address: "420 Sick Court, Toronto",
            number: "416 - 069 - 420",
            image: "./assets/dinos",
            details: "A cozy resauraunt with a very home-y vibe.... Lots of food"
        },
        {
            name: "Tinos",
            address: "420 Nice HA-Ha Court, Toronto",
            number: "416 - 069 - 420",
            image: "./assets/dinos",
            details: "A cozy resauraunt with a very home-y vibe.... Lots of food"
        },
        {
            name: "Linos",
            address: "420 Blu Unte Cres, Toronto",
            number: "416 - 069 - 420",
            image: "./assets/dinos",
            details: "A cozy resauraunt with a very home-y vibe.... Lots of food"
        }
    ]
    return (
        <View>
            {restaurants.map(restaurant => (
                <View>
                    <RestaurantInfo restaurant={restaurant}/>
                    <Button
        title={"See more details"}
        onPress={() => navigation.navigate('Details', {"restaurant": restaurant})}
      />
                </View>
            ))}
        </View>
    )
}

