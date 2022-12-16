import { Text, View, StyleSheet, Dimensions } from "react-native";
import { colors } from "../../constants/colors";

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    padding: deviceWidth < 450 ? 12 : 24,
    margin: deviceWidth < 450 ? 12 : 24,
    borderWidth: 4,
    borderColor: colors.accent500,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    fontSize: deviceWidth < 450 ? 28 : 36,
    color: colors.accent500,
  },
});
