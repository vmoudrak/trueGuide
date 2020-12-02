import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import RestaurantInfo from './Resuseables/RestaurantInfo'
import RatingWithStar from './Rating/RatingWithStar';
import { SearchBar } from 'react-native-elements'
import {matchSorter} from "match-sorter";

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
        <View style={styles.container}>
            <SearchBar
        placeholder="Type Here..."
        onChangeText={value => setSearchText(value)}
        value={searchText}
      />
            {!searchText && (restaurants.map(restaurant => (
                <View style={{ margin:10 }}>
                    <RestaurantInfo 
                        key={restaurant.id} 
                        restaurant={restaurant}
                    />
                        <RatingWithStar />
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