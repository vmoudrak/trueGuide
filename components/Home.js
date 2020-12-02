import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import RestaurantInfo from "./Resuseables/RestaurantInfo";
import RatingWithStar from "./Rating/RatingWithStar";
import {
  SearchBar,
  Badge,
  ThemeProvider,
  withTheme,
  TouchableOpacity,
} from "react-native-elements";
import { matchSorter } from "match-sorter";

export default function home({ navigation }) {
  const theme = {
    color: "#000",
  };
  const restaurants = [
    {
      id: 1,
      name: "Dinos",
      address: "1 Richmond St W, Toronto",
      number: "416 - 069 - 420",
      image: "./assets/dinos",
      details: "A cozy resauraunt with a very home-y vibe.... Lots of food",
      tags: ["talian", "nona", "meatballs"],
      latitude: 43.65139,
      longitude: -79.379288,
    },
    {
      id: 2,
      name: "Ginos",
      address: "49 Front St E, Toronto",
      number: "416 - 069 - 420",
      image: "./assets/dinos",
      details: "A cozy resauraunt with a very home-y vibe.... Lots of food",
      tags: ["talian", "meat", "meatballs"],
      latitude: 43.64798,
      longitude: -79.374268,
    },
    {
      id: 3,
      name: "Tinos",
      address: "163 Spadina Ave, Toronto",
      number: "416 - 069 - 420",
      image: "./assets/dinos",
      details: "A cozy resauraunt with a very home-y vibe.... Lots of food",
      tags: ["talian", "fire", "nonvegan"],
      latitude: 43.64852,
      longitude: -79.39588,
    },
    {
      id: 4,
      name: "Linos",
      address: "1 Benvenuto Pl, Toronto",
      number: "416 - 069 - 420",
      image: "./assets/dinos",
      details: "A cozy resauraunt with a very home-y vibe.... Lots of food",
      tags: ["talian", "fire", "vegan"],
      latitude: 43.68156,
      longitude: -79.39995,
    },
  ];

  const [searchText, setSearchText] = useState("", []);
  const [tagSearch, setTagSearch] = useState("", []);

  const filterBySearchText = () =>
    matchSorter(restaurants, searchText, { keys: ["name", "tags"] });
  const filterByTagText = () =>
    matchSorter(restaurants, tagSearch, {
      threshold: matchSorter.rankings.EQUAL,
      keys: ["tags"],
    });

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={(value) => {
          setSearchText(value);
          setTagSearch("");
        }}
        value={searchText}
      />

      {searchText == "" &&
        tagSearch == "" &&
        restaurants.map((restaurant) => (
          <View style={{ margin: 10 }}>
            <RestaurantInfo key={restaurant.id} restaurant={restaurant} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              {restaurant.tags.map((tag) => (
                <View style={{ marginBottom: 25, marginTop: 10, marginEnd: 5 }}>
                  <Badge
                    status="primary"
                    textStyle={{ color: "black" }}
                    badgeStyle={{
                      padding: 10,
                      backgroundColor: "#d2d2f9",
                      borderColor: "blue",
                    }}
                    value={tag}
                    Component={TouchableOpacity}
                    onPress={() => {
                      setTagSearch(tag);
                    }}
                  />
                </View>
              ))}
            </View>

            <RatingWithStar />
            <Button
              color="#6495ed"
              type="raised"
              title={"See more details"}
              onPress={() =>
                navigation.navigate("Details", { restaurant: restaurant })
              }
            />
          </View>
        ))}

      {searchText != "" && tagSearch == "" && (
        <View>
          <View style={{ marginBottom: 5, marginTop: 10, marginEnd: 5 }}>
            <Badge
              status="primary"
              textStyle={{ color: "red" }}
              badgeStyle={{
                padding: 10,
                backgroundColor: "#d2d2f9",
                borderColor: "red",
              }}
              value={"Clear Search"}
              Component={TouchableOpacity}
              onPress={() => setSearchText("")}
            />
          </View>

          {filterBySearchText().map((restaurant) => (
            <View style={{ margin: 10 }}>
              <RestaurantInfo key={restaurant.id} restaurant={restaurant} />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                {restaurant.tags.map((tag) => (
                  <View
                    style={{ marginBottom: 25, marginTop: 10, marginEnd: 5 }}
                  >
                    <Badge
                      status="primary"
                      textStyle={{ color: "black" }}
                      badgeStyle={{
                        padding: 10,
                        backgroundColor: "#d2d2f9",
                        borderColor: "blue",
                      }}
                      value={tag}
                      Component={TouchableOpacity}
                      onPress={() => {
                        setTagSearch(tag);
                      }}
                    />
                  </View>
                ))}
              </View>
              <RatingWithStar />
              <Button
                color="#6495ed"
                type="raised"
                title={"See more details"}
                onPress={() =>
                  navigation.navigate("Details", { restaurant: restaurant })
                }
              />
            </View>
          ))}
        </View>
      )}
      {tagSearch != "" && 
      <View>
          <View style={{ marginBottom: 0, marginTop: 10, marginEnd: 5 }}>
              <Badge
                status="primary"
                textStyle={{ color: "red" }}
                badgeStyle={{
                  padding: 10,
                  backgroundColor: "#d2d2f9",
                  borderColor: "red",
                }}
                value={"Clear Tags"}
                Component={TouchableOpacity}
                onPress={() => setTagSearch("")}
              />
            </View>
        {filterByTagText().map((restaurant) => (
          <View style={{ margin: 10 }}>
            
            <RestaurantInfo key={restaurant.id} restaurant={restaurant} />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              {restaurant.tags.map((tag) => (
                <View style={{ marginBottom: 25, marginTop: 10, marginEnd: 5 }}>
                  <Badge
                    status="primary"
                    textStyle={{ color: "black" }}
                    badgeStyle={{
                      padding: 10,
                      backgroundColor: "#d2d2f9",
                      borderColor: "blue",
                    }}
                    value={tag}
                    Component={TouchableOpacity}
                    onPress={() => {
                      setTagSearch(tag);
                    }}
                  />
                </View>
              ))}
            </View>
            <RatingWithStar />
            <Button
              color="#6495ed"
              type="raised"
              title={"See more details"}
              onPress={() =>
                navigation.navigate("Details", { restaurant: restaurant })
              }
            />
          </View>
        ))}
        </View>
        }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d2d2f9",
  },
});
