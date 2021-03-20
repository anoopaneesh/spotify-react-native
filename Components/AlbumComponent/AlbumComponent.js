import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import {useNavigation} from '@react-navigation/native'
import { styles } from "./styles";
const AlbumComponent = ({ imageUri, title }) => {
    const navigation = useNavigation()
    const handler = () => {
        navigation.navigate("Album")
    }
  return (
    <TouchableWithoutFeedback onPress={handler}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri:imageUri}} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AlbumComponent;
