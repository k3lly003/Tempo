import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet, View, Text, TextInput } from "react-native";

export default function App() {
  const handleSearch = () => {
    //handle codes
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.top}>
          <Text>Buytopia</Text>
          <Entypo name="shopping-cart" size={30} color="#000" />
        </View>
        <View style={styles.menu}>
          <Ionicons name="menu" size={30} />
        </View>
      </View>

      <View style={styles.searchcont}>
        <TextInput
          style={styles.searchInput}
          placeholder="search..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <Button onPress={handleSearch}>Search</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  top: {
    display: "flex",
    justifyContent: "center",
  },
  menu: {
    display: "flex",
    justifyContent: "flex-end",
  },
  searchInput: {
    borderColor: "gray",
    borderWidth: 1,
    width: 20,
    height: 20,
  },
  searchcont: {
    width: 100,
    display: "flex",
    justifyContent: "center",
  },
});
