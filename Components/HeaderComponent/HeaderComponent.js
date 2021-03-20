import React from 'react'
import { View, Text , Image} from 'react-native'
import {styles} from './styles'


const HeaderComponent = ({title,imageUri,subtitle}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:imageUri}} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
            <View style={styles.button}>
                <Text style={styles.buttonText}>Pause</Text>
            </View>
        </View>
    )
}

export default HeaderComponent
