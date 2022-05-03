import { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState(0);
  const { width, height } = useWindowDimensions();

  const numberInputHandler = (text) => {
    setEnteredNumber(text);
  };

  const resetInputHandler = () => {
    setEnteredNumber(0);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99
      ? Alert.alert("Invalid number!", "Number has to be an integer between 1 and 99.", [
          { text: "Okay", style: "destructive", onPress: resetInputHandler },
        ])
      : onPickNumber(chosenNumber);
    // : setEnteredNumber(text);
    return;
  };

  const marginTopDist = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen}>
        {/* this breaks the app by pushing the items away from view, so we need scrollview to put the items back in view */}
        <View style={[styles.rootContainer, { marginTop: marginTopDist }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={enteredNumber === 0 ? "" : enteredNumber}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
    // this means the button will take up all the space available to it. Sort of like col-12 in bootstrap
  },
});

export default StartGameScreen;
