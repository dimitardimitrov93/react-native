import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    margin: 24,
    borderWidth: 4,
    borderColor: colors.accent500,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    fontSize: 36,
    color: colors.accent500,
  },
});
