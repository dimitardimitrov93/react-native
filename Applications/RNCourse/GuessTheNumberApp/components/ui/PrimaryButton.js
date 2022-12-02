import { View, Text, Pressable, StyleSheet } from "react-native";
import { colors } from "../../constants/colors";

export const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={onPress}
        android_ripple={{ color: colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 8,
    borderRadius: 28,
    overflow: "hidden",
    elevation: 2,
  },
  innerContainer: {
    backgroundColor: colors.primary500,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
