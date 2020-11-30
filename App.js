import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import About from "./components/About/About"
import DetailsContainer from './components/Details/DetailsContainer';
import Home from './components/Home';

export default function App() {
  const Stack =  createStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
          name="Home" 
          component={Home} 
          options={({ navigation }) => ({
            title:'True Guide',
            headerStyle: {
              backgroundColor: '#1818b4'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold'
            },
            headerRight: () => (
              <Button
                title="About Us" 
                onPress={() => navigation.navigate("About Screen")}
              />
            ),
            })}
          />
          <Stack.Screen name="About Screen" component={About} options={{ title: 'About Screen' }} />
          <Stack.Screen name="Details" component={DetailsContainer} options={{ title: 'Restaurant Details' }} ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d2d2f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
