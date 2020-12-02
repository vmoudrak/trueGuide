import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import StarRating from "react-native-star-rating";
import AsyncStorage from "@react-native-community/async-storage";

class RatingWithStar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5,
    };
    this.getData();
  }

  // onStarRatingPress(rating) {
  //   this.setState({
  //     starCount: rating
  //   });
  // }

  save = async (rating) => {
    try {
      await AsyncStorage.setItem("starCount", rating.toString());
    } catch (error) {
      console.log(error);
    }
  };

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });

    this.save(rating);
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("starCount");

      if (value !== null) {
        this.setState({ starCount: value });
      }
    } catch (error) {}
  };

  render() {
    return (
      <StarRating
        fullStarColor={"gold"}
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
      />
    );
  }
}

export default RatingWithStar;
