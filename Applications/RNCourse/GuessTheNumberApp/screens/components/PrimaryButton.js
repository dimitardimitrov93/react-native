import { View, Text, Pressable, StyleSheet } from "react-native";

export const PrimaryButton = ({ children }) => {
  const pressHandler = () => {
    console.log("Pressed!");
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
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
    backgroundColor: "#72063c",
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
