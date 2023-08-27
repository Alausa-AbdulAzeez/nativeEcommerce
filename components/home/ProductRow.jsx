import { ActivityIndicator, FlatList, Text, View } from "react-native";
import React, { Component } from "react";
import { COLORS, SIZES } from "../../constants/theme";
import ProductCardView from "./ProductCardView";
import { styles } from "./productRow.styles";
import useFetch from "../../hooks/useFetch";

const ProductRow = () => {
  const { data, isLoading, error } = useFetch();

  const products = [1, 2, 3, 4];
  return (
    <View style={styles.productRowContainer}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>{error?.message || "Something went wrong"} </Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item?._id}
          renderItem={({ item }) => {
            return <ProductCardView item={item} />;
          }}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default ProductRow;
