
import React from "react";
import { StyleSheet, Text, View , Platform , StatusBar } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import BottomTab from "./Navigation/BottomTab";
import SongWidget from "./Components/SongWidgetComponent/SongWidget";
import {albumList} from './utils/albumList'

const album = albumList.items[0]

export default function App() {
  return (
    <NavigationContainer>
    <StatusBar ></StatusBar>
    <View style={styles.container}>
    <SongWidget imageUri={album.imageUri} subtitle={album.name} title={album.name}/>
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
