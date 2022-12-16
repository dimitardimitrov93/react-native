import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { PrimaryButton } from "../components/ui/PrimaryButton";
import { Title } from "../components/ui/Title";
import { colors } from "../constants/colors";

export const GameOverScreen = ({ guessRounds, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed
        <Text style={styles.highlight}> {guessRounds.length - 1} </Text>
        rounds to guess the number
        <Text style={styles.highlight}> {userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: deviceWidth < 450 ? 180 : 300,
    width: deviceWidth < 450 ? 180 : 300,
    borderRadius: deviceWidth < 450 ? 90 : 150,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 18,
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: colors.primary500,
  },
});
