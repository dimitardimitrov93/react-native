import { Text, View, StyleSheet } from "react-native";

export const GoalItem = ({}) => (
  <View style={styles.goalItem}>
    <Text style={styles.goalText}>{item.text}</Text>
  </View>
);

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
