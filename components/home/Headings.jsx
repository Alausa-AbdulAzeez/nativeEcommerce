import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import "./headings.style";
import { styles } from "./headings.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const Headings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Arrivals</Text>
        <TouchableOpacity onPress={() => navigation.navigate("NewArrivals")}>
          <Ionicons name="ios-grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headings;
