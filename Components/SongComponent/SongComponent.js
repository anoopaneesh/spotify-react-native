import React from 'react'
import { View, Text } from 'react-native'
import {styles} from './styles'

const SongComponent = ({title,subtitle}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Love song 2020</Text>
            <Text style={styles.subtitle}>HipHop Tamizha</Text>
        </View>
    )
}

export default SongComponent
