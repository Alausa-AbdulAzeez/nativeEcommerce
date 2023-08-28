import { StyleSheet } from "react-native";
import { SIZES } from "../constants/theme";

export const styles = StyleSheet.create({
  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  container: {
    alignItems: "center",
    paddingTop: SIZES.xxLarge + 10,
    paddingLeft: SIZES.small / 2,
    alignContent: "center",
  },
  separator: {
    height: 16,
  },
});
