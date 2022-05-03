import { Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

const InstructionText = ({ children, moreStyles }) => {
  return <Text style={[styles.instructionText, moreStyles]}>{children}</Text>;
  //   this is how to pass a style into a component, i.e. through the props.
  // it imitates the cascading nature of CSS.
  // remember that the last item in the array takes precedence
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "open-sans-regular",
    color: Colors.accent500,
    fontSize: 24,
  },
});
