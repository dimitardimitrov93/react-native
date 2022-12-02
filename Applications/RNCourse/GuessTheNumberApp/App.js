import { useState } from "react";
import { SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

import { StartGameScreen } from "./screens/StartGameScreen";
import { GameScreen } from "./screens/GameScreen";
import { colors } from "./constants/colors";
import { GameOverScreen } from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState([]);
  const [isGameOver, setIsGameOver] = useState(true);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setIsGameOver(false);
  };

  const gameOverHandler = () => {
    setIsGameOver(true);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = isGameOver ? (
      <GameOverScreen
        onStartNewGame={startNewGameHandler}
        {...{ userNumber, guessRounds }}
      />
    ) : (
      <GameScreen
        onGameOver={gameOverHandler}
        {...{ userNumber, guessRounds, setGuessRounds }}
      />
    );
  }

  if (!fontsLoaded) return <AppLoading />;

  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[colors.primary700, colors.accent500]}
    >
      <ImageBackground
        style={styles.backgroundImage}
        resizeMode="cover"
        source={require("./assets/images/background.png")}
        imageStyle={styles.image}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  image: {
    opacity: 0.15,
  },
});
