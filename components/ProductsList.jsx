import { View, Text, ActivityIndicator, FlatList } from "react-native";
import React from "react";
import useFetch from "../hooks/useFetch";
import { styles } from "./productsList.styles";
import { COLORS, SIZES } from "../constants/theme";
import ProductCardView from "./home/ProductCardView";

const ProductsList = () => {
  const { isLoading, error, data } = useFetch();

  return (
    <View style={isLoading ? styles.loadingContainer : styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : (
        <FlatList
          data={data}
          numColumns={2}
          renderItem={({ item }) => <ProductCardView item={item} />}
          contentContainerStyle={styles.container}
          ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        />
      )}
    </View>
  );
};

export default ProductsList;
