import { View, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import { styles } from "./productCardView.style";
import IMG1 from "../../assets/images/fn1.jpg";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const ProductCardView = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", item)}
    >
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{ uri: item?.imageUrl }} />
        </View>
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.title}>
            Product Details
          </Text>
          <Text numberOfLines={1} style={styles.supplier}>
            {item?.title}
          </Text>
          <Text style={styles.price}>{item?.price}</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" color={COLORS.primary} size={35} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
