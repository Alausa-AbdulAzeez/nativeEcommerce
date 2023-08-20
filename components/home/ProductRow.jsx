import { FlatList, Text, View } from "react-native";
import React, { Component } from "react";
import { SIZES } from "../../constants/theme";
import ProductCardView from "./ProductCardView";
import { styles } from "./productRow.styles";

const ProductRow = () => {
  const products = [1, 2, 3, 4];
  return (
    <View style={styles.productRowContainer}>
      <FlatList
        data={products}
        renderItem={(item) => {
          return <ProductCardView />;
        }}
        horizontal
        contentContainerStyle={{ columnGap: SIZES.medium }}
      />
    </View>
  );
};

export default ProductRow;
