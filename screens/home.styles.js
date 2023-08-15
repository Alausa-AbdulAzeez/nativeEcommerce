import { Dimensions, StyleSheet } from "react-native";
import { COLORS, SHADOWS, SIZES } from "../constants/theme";

export const styles = StyleSheet.create({
  homeColor: {
    backgroundColor: "red",
    height: SIZES.height,
  },
  appBarWrapper: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
});
