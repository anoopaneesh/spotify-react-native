import React from 'react'
import { View, Text,Image } from 'react-native'
import {styles} from './styles'
const AlbumComponent = ({imageUri,title}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={imageUri}/>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default AlbumComponent
