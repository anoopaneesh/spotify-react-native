import React from 'react'
import { View, Text } from 'react-native'
import {styles} from './styles'
import AlbumContainer from "../../Containers/AlbumContainer/AlbumContainer";

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <AlbumContainer />
            <AlbumContainer />
            <AlbumContainer />
            <AlbumContainer />
        </View>
    )
}

export default HomeScreen
