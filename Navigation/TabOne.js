import React from 'react'
import { View, Text } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import AlbumScreen from '../Screens/AlbumScreen/AlbumScreen'

const Stack = createStackNavigator()
const homeOptions = {
    title:'',
    headerStyle:{
        height:0,
    },
    gestureDirection: "horizontal-inverted" 
}
const albumOptions = {
    title:'',
    headerStyle:{
        borderBottomWidth:0,
        backgroundColor: "#1C1C1C",
    },
    headerTintColor: '#fff',
    animationEnabled:'false'
}
const TabOne = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={homeOptions}/>
            <Stack.Screen name="Album" component={AlbumScreen} options={albumOptions}/>
        </Stack.Navigator>
    )
}

export default TabOne
