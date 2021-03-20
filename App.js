
import React from "react";
import { StyleSheet, Text, View , Platform , StatusBar } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./Navigation/BottomTab";

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar ></StatusBar>
    <View style={styles.container}>
    <BottomTab />
    </View>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: "black",
  },
});
