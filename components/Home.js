import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import RestaurantInfo from './Resuseables/RestaurantInfo'
import RatingWithStar from './Rating/RatingWithStar';


export default function home({ navigation }) {
    const restaurants = [
        {
            id: 1,
            name: "Dinos",
            address: "1 Richmond St W, Toronto",
            number: "416 - 069 - 420",
            image: "./assets/dinos",
            details: "A cozy resauraunt with a very home-y vibe.... Lots of food",
            tags: ["talian", "nona", "meatballs"],
            latitude: 43.651390,
            longitude: -79.379288
        },
        {
            id: 2,
            name: "Ginos",
            address: "49 Front St E, Toronto",
            number: "416 - 069 - 420",
            image: "./assets/dinos",
            details: "A cozy resauraunt with a very home-y vibe.... Lots of food",
            tags: ["talian", "nona", "meatballs"],
            latitude: 43.647980,
            longitude: -79.374268
        },
        {
            id: 3,
            name: "Tinos",
            address: "163 Spadina Ave, Toronto",
            number: "416 - 069 - 420",
            image: "./assets/dinos",
            details: "A cozy resauraunt with a very home-y vibe.... Lots of food",
            tags: ["talian", "nona", "meatballs"],
            latitude:  43.648520,
            longitude: -79.395880        
        },
        {
            id: 4,
            name: "Linos",
            address: "1 Benvenuto Pl, Toronto",
            number: "416 - 069 - 420",
            image: "./assets/dinos",
            details: "A cozy resauraunt with a very home-y vibe.... Lots of food",
            tags: ["talian", "nona", "meatballs"],
            latitude: 43.681560,
            longitude: -79.399950
        }
    ]

    const [searchText, setSearchText] = useState("", []);

    const filterBySearchText = () => matchSorter(restaurants, searchText, { keys: ["name", "tags"] });

    return (
        <View>

            {!searchText && (restaurants.map(restaurant => (
                <View>

                    <RestaurantInfo restaurant={restaurant} />
                      <RatingWithStar />
                    <Button key={restaurant.key} title={"See more details"}
                        onPress={() => navigation.navigate('Details', { "restaurant": restaurant })} />
                </View>
            )))}

        </View>
    )
}

