import React from "react";
import { View, Text, FlatList } from "react-native";
import AlbumComponent from "../../Components/AlbumComponent/AlbumComponent";
import { albumList } from "../../utils/albumList";
import { styles } from "./styles";
const renderItem = ({ item }) => {
  return <AlbumComponent imageUri={item.imageUri} title={item.name} />;
};
const AlbumContainer = ({ albums }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{albumList.name}</Text>
      <FlatList
        keyExtractor={(item)=>item.id}
        data={albumList.items}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default AlbumContainer;
