import { useEffect, useState } from "react";
import { Alert, View, Text, StyleSheet, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { NumberContainer } from "../components/game/NumberContainer";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";
import { GuessLogItem } from "../components/game/GuessLogItem";

export const GameScreen = ({
  userNumber,
  guessRounds,
  setGuessRounds,
  onGameOver,
}) => {
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
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  };

  const guessRoundsListLength = guessRounds.length;

  const [minBoundary, setMinBoundary] = useState(1);
  const [maxBoundary, setMaxBoundary] = useState(100);

  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver();
    }
  }, [userNumber, currentGuess, onGameOver]);

  useEffect(() => {
    setGuessRounds([initialGuess]);
    setMinBoundary(1);
    setMaxBoundary(100);
  }, []);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Card>
          <InstructionText style={styles.instructionText}>
            Higher or Lower?
          </InstructionText>
          <View style={styles.buttonsContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              <Ionicons name="md-remove" size={24} />
            </PrimaryButton>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "higher")}>
              <Ionicons name="md-add" size={24} />
            </PrimaryButton>
          </View>
        </Card>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={({ item, index }) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - index}
              guess={item}
            >
              {item}
            </GuessLogItem>
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  instructionText: {
    marginBottom: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
