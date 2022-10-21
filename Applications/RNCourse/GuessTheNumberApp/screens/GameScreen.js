import { View, Text, StyleSheet } from "react-native";

export const GameScreen = () => {
  return (
    <View styles={style.screen}>
      <Text>Opponent's Guess</Text>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
