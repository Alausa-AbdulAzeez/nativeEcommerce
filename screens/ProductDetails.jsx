import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { styles } from "./productDetails.styles";
import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { COLORS } from "../constants/theme";
import { useRoute } from "@react-navigation/native";

const ProductDetails = ({ navigation }) => {
  // PRODUCT COUNT
  const [productCount, setProductCount] = useState(1);

  // ROUTE DATA
  const route = useRoute();
  const { item } = route?.params;

  // FUNCTION TO HANDLE PRODUCT INCREAMENT AND DECREMENT
  const handleProductCountChange = (changeType) => {
    if (changeType === "increase") {
      setProductCount((prev) => prev + 1);
    }
    if (changeType === "decrease" && productCount > 1) {
      setProductCount((prev) => prev - 1);
    }
  };
  // END OF FUNCTION TO HANDLE PRODUCT INCREAMENT AND DECREMENT

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image source={{ uri: item?.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item?.title}</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>{item?.price}</Text>
          </View>
        </View>
        <View style={styles.ratingAndCountRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => {
              return (
                <Ionicons name="star" color="gold" key={index} size={24} />
              );
            })}
            <Text style={styles.ratingText}>(5.0)</Text>
          </View>
          <View style={styles.count}>
            <TouchableOpacity
              onPress={() => handleProductCountChange("decrease")}
            >
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>

            <Text style={styles.countText}>{productCount}</Text>
            <TouchableOpacity
              onPress={() => handleProductCountChange("increase")}
            >
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            alias ex ullam error totam distinctio deleniti temporibus
            dignissimos eum ab impedit, dolorem officia, commodi corporis
            similique? Praesentium asperiores pariatur omnis. Aliquid, dolores?
            Quam cupiditate quod delectus consequuntur eius, debitis ipsam hic
            beatae?
          </Text>
        </View>
        <View style={styles.locationAndDeliveryRow}>
          <View style={styles.location}>
            <Ionicons name="location-outline" size={20} />
            <Text style={styles.locationText}>{item?.product_location}</Text>
          </View>
          <View style={styles.delivery}>
            <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
            <Text style={styles.deliveryText}> Free Delivery</Text>
          </View>
        </View>
        <View style={styles.buyNowAndBagRow}>
          <TouchableOpacity style={styles.buyNowBtn}>
            <Text style={styles.buyNowText}>BUY NOW</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bag}>
            <Fontisto name="shopping-bag" size={20} color={COLORS.white} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
