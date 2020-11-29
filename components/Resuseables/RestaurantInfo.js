import React from "react";
import { View, Text, Image } from "react-native";

export default function RestaurantInfo(props) {
    const {restaurant} = props;
    return (
    <View>
      <View>
        <Text>{restaurant.name}</Text>
        <Text>{restaurant.address}</Text>
        <Text>{restaurant.number}</Text>
      </View>
      <View>
        <Image>{restaurant.logo}</Image>
      </View>
    </View>
  );
}
