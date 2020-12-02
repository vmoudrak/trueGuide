import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import RestaurantInfo from './Resuseables/RestaurantInfo'
import RatingWithStar from './Rating/RatingWithStar';


export default function home({ navigation }) {
    const restaurants = [
        {
            id: 1,
            name: "Dinos",
            address: "420 Snp Dogg Court, Toronto",
            number: "416 - 069 - 420",
            image: "./assets/dinos",
            details: "A cozy resauraunt with a very home-y vibe.... Lots of food",
            tags: ["talian","nona","meatballs"]
        },
        {
            id: 2,
            name: "Ginos",
            address: "420 Sick Court, Toronto",
            number: "416 - 069 - 420",
            image: "./assets/dinos",
            details: "A cozy resauraunt with a very home-y vibe.... Lots of food",
            tags: ["talian","nona","meatballs"]
        },
        {
            id: 3,
            name: "Tinos",
            address: "420 Nice HA-Ha Court, Toronto",
            number: "416 - 069 - 420",
            image: "./assets/dinos",
            details: "A cozy resauraunt with a very home-y vibe.... Lots of food",
            tags: ["talian","nona","meatballs"]
        },
        {
            id: 4,
            name: "Linos",
            address: "420 Blu Unte Cres, Toronto",
            number: "416 - 069 - 420",
            image: "./assets/dinos",
            details: "A cozy resauraunt with a very home-y vibe.... Lots of food",
            tags: ["talian","nona","meatballs"]
        }
    ]

    const [searchText, setSearchText] = useState("", []);

    const filterBySearchText = () => matchSorter(restaurants, searchText, { keys: ["name"] });


    return (
        <View style={styles.container}>
            {!searchText && (restaurants.map(restaurant => (
                <View style={{ margin:10 }}>
                    <RestaurantInfo 
                        key={restaurant.id} 
                        restaurant={restaurant}
                    />
                    <Button  
                        color="#6495ed"
                        type="raised"
                        title={"See more details"}
                        onPress={() => navigation.navigate('Details', {"restaurant": restaurant})} 
                    />
                </View>
            )))}
            {searchText != "" &&  (filterBySearchText().map(restaurant => (
                <View style={{ margin: 10 }}>
                    <RestaurantInfo 
                        key={restaurant.id} 
                        restaurant={restaurant}
                    />
                    <Button
                        color="#6495ed"
                        type="raised"
                        title={"See more details"}
                        onPress={() => navigation.navigate('Details', { "restaurant": restaurant })} 
                    />

                </View>
                
            )))}
   
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d2d2f9',
    },
});