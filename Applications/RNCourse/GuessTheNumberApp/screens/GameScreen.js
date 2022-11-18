import { useState } from "react";
import { Alert, View, Text, StyleSheet } from "react-native";
import { NumberContainer } from "./components/game/NumberContainer";
import { PrimaryButton } from "./components/ui/PrimaryButton";
import { Title } from "./components/ui/Title";

export const GameScreen = ({ userNumber }) => {
  const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    return rndNum === exclude
      ? generateRandomBetween(min, max, exclude)
      : rndNum;
  };

  const nextGuessHandler = (direction) => {
    let newRndNumber;

    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert(`Don't lie!`, "You know that this is wrong...", [
        { text: "Try again", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      const max = currentGuess;
      setMaxBoundary(max);
      newRndNumber = generateRandomBetween(minBoundary, max, currentGuess);
    } else {
      const min = currentGuess + 1;
      setMinBoundary(min);
      newRndNumber = generateRandomBetween(min, maxBoundary, currentGuess);
    }

    setCurrentGuess(newRndNumber);
  };

  const [minBoundary, setMinBoundary] = useState(1);
  const [maxBoundary, setMaxBoundary] = useState(100);

  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View style={styles.buttonsContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
