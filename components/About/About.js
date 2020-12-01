import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function About() {
  return (
    <>
    <ScrollView>
    <View style={styles.head}>
      <Text style={styles.header}>The Team</Text>
    </View>
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/clooney.jpg")} />
      <View style={styles.content}>
        <Text style={styles.title}>Alexander Koumarianos</Text>
        <Text>Student ID: 101075604</Text>
        <Text>Country: Canada</Text>
        <Text>Age: 25</Text>
      </View> 
    </View>
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/person-1.jpg")} />
      <View style={styles.content}>
        <Text style={styles.title}>Anass Elabeidi</Text>
        <Text>Student ID: 101220896</Text>
        <Text>Country: Canada</Text>
        <Text>Age: 32</Text>
      </View> 
    </View>
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/man.jpg")} />
      <View style={styles.content}>
        <Text style={styles.title}>Hyeonjun Yoon</Text>
        <Text>Student ID: 1012113</Text>
        <Text>Country: Canada</Text>
        <Text>Age: 26</Text>
      </View> 
    </View>
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/tyson.jpg")} />
      <View style={styles.content}>
        <Text style={styles.title}>Isaiah Sylvester</Text>
        <Text>Student ID: 100859973</Text>
        <Text>Country: Canada</Text>
        <Text>Age: 25</Text>

      </View> 
    </View>
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/woody.jpg")} />
      <View style={styles.content}>
        <Text style={styles.title}>Vitalii Moudrak</Text>
        <Text>Student ID: 101230862</Text>
        <Text>Country: Canada</Text>
        <Text>Age: 30</Text>
      </View> 
    </View>
    <View style={styles.container}>
      <Image style={styles.image} source={require("../../assets/miller.jpg")} />
      <View style={styles.content}>
        <Text style={styles.title}>Jack Stamcos</Text>
        <Text>Student ID: 101225743</Text>
        <Text>Country: Canada</Text>
        <Text>Age: 18</Text>
      </View> 
    </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 100,
    width: 370,
    padding: 6,
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: "#eaeaea"
  },
  head: {
    marginTop: 7,
    padding: 11,
    height: 60,
    width: 370,
  },
  header: {
    padding: 8,
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    height: '100%',
    flex: 0.35,
  },
  content: {
    flex: 0.65,
    paddingHorizontal: 11,
  },
  title: {
    marginBottom: 6,
    color: "#20232a",
    fontSize: 15,
    fontWeight: "bold"
  }
});
