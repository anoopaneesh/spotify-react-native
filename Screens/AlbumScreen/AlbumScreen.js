import React from "react";
import { View, Text, FlatList } from "react-native";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import SongComponent from "../../Components/SongComponent/SongComponent";
import { albumList } from "../../utils/albumList";
import { styles } from "./style";
const AlbumScreen = ({ albumId }) => {
  const album = albumList.items[0];
  return (
    <View style={styles.container}>
      <FlatList
        data={albumList.items}
        renderItem={({ item }) => <SongComponent />}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={()=><HeaderComponent title={album.name} imageUri={album.imageUri} subtitle={'New Artist'} />}
      />
    </View>
  );
};

export default AlbumScreen;
