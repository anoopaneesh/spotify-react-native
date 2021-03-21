import React, { useState } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { styles } from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const SongWidget = ({ imageUri, title, subtitle }) => {
  const [play, setPlay] = useState("false");
  const [fav, setFav] = useState("false");
  return (
    <View style={styles.container}>
      <View style={styles.song}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.subtitle, { marginRight: 5, fontWeight: "bold" }]}>
          {"."}
        </Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      <View style={styles.icons}>
        <TouchableWithoutFeedback onPress={() => setFav(!fav)}>
          <AntDesign name={fav ? "heart" : "hearto"} size={24} color="white" />
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => setPlay(!play)}>
          <Ionicons name={play ? "play" : "pause"} size={24} color="white" />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default SongWidget;
