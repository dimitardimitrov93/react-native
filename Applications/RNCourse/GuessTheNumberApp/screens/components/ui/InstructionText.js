import { Text, StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export const InstructionText = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    color: colors.accent500,
    fontFamily: "open-sans",
    fontSize: 24,
  },
});
