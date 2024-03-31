import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Form from "./components/Form";
import { useState } from "react";
import SubmitButton from "./components/SubmitButton";

export default function App() {
  const [inputs, setInputs] = useState({
    first: "",
    middle: "",
    last: "",
    day: "",
    year: "",
    month: "",
    /*bloodGroup: "",
    rhFactor: "",
    maritalStatus: "",
    phoneHome: "",
    phoneMobile: "",
    emailAddress: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    currentIllness: "",
    previousIllness: "",
    allergies: "",*/
  });
  const handleSubmit = () => {
    console.log("High Energy Weapons");
  };

  const handleChange = (text, input) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };

  return (
    <SafeAreaView style={styles.app}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add New Patient</Text>
        </View>
        <Text style={styles.label}>Name</Text>
        <Form placeholder="First" />
        <Form placeholder="Middle" />
        <Form placeholder="Last" />
        <Text style={styles.label}>Date of Birth</Text>
        <Form placeholder="YYYY" />
        <Form placeholder="MM" />
        <Form placeholder="DD" onChangeText={setInputs.day} />
        <SubmitButton onPress={handleSubmit} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerText: {
    fontSize: 32,
    paddingVertical: 10,
  },
  header: {
    backgroundColor: "#fff",
    borderRadius: 40,
    alignItems: "center",
    marginBottom: 0,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    width: 300,
    marginLeft: 20,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
});
