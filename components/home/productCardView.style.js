import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    marginEnd: 22,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.secondary,
  },
  imgContainer: {
    minHeight: 140,
    maxHeight: 180,
    height: "60%",
    margin: 4,
    borderRadius: SIZES.small,
    overflow: "hidden",
  },

  img: {
    width: "100%",
    height: "100%",
  },
  details: {
    paddingHorizontal: SIZES.small - 4,
  },

  title: {
    fontFamily: "bold",
    fontSize: SIZES.medium,
    lineHeight: 20,
  },
  supplier: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  price: {
    fontFamily: "semiBold",
    fontSize: SIZES.medium,
  },
  addBtn: {
    position: "absolute",
    bottom: SIZES.small,
    right: SIZES.small,
  },
});
