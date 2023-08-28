import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "../constants/theme";
import { styles } from "./search.styles";

const Search = () => {
  // SEARCH VARIABLE
  const [searchKey, setSearchKey] = useState("");

  console.log(searchKey);

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="What are you looking for"
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Ionicons name="camera-outline" size={24} color={COLORS.offwhite} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Search;
