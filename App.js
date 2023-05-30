import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "./app/config/colors";
import Homescreen from "./app/screens/HomeScreen";
import CoffeeDetailsScreen from "./app/screens/CoffeeDetailsScreen";
import coffees from "./app/config/coffees";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark }}>
      <Homescreen />
      <CoffeeDetailsScreen coffee={coffees[3]} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
