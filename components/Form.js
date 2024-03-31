import { View, StyleSheet, TextInput, Text } from "react-native";
import { useState } from "react";

const Form = ({ error, onFocus = () => {}, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.form}>
      <TextInput
        autoCorrect={false}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        style={[styles.input, { borderColor: isFocused ? "blue" : "white" }]}
        cursorColor="#ffffff00"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {},
  input: {
    height: 50,
    backgroundColor: "#eee",
    paddingVertical: 13,
    paddingLeft: 20,
    fontSize: 18,
    borderRadius: 30,
    marginVertical: 4,
    borderWidth: 2,
  },
});

export default Form;
