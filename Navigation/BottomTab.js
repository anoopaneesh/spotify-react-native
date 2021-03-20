import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign } from "@expo/vector-icons";

import HomeScreen from "../Screens/HomeScreen/HomeScreen";


const Tab = createBottomTabNavigator();
const Search = () => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <Text style={{ color: "white" }}>Search</Text>
    </View>
  );
};

const options = {
  showLabel: true,
  activeTintColor: "white",
  inactiveTintColor: "gray",
  style: {
    borderTopWidth: 0,
    backgroundColor: "black",
  },
  labelStyle: {
    marginBottom: 5,
  },
};

const getIcon = (focused, color, name) => {
  if (name === "Home") {
    return (
      <View>
        <Entypo name="home" size={24} color={color} />
      </View>
    );
  } else if (name === "Search") {
    return (
      <View>
        <AntDesign name="search1" size={24} color={color} />
      </View>
    );
  }
};

const BottomTab = () => {
  return (
    <Tab.Navigator tabBarOptions={options}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            getIcon(focused, color, "Home"),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) =>
            getIcon(focused, color, "Search"),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
