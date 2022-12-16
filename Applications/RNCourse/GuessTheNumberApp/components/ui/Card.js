import { View, StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/colors";

export const Card = ({ children }) => {
  return <View style={styles.rootContainer}>{children}</View>;
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: deviceWidth < 450 ? 18 : 36,
    marginHorizontal: 24,
    padding: 32,
    backgroundColor: colors.primary800,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
