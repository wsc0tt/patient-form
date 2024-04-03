import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Form from "./components/Form";
import { useState } from "react";
import SubmitButton from "./components/SubmitButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DropDownPicker from "react-native-dropdown-picker";

const initialValues = {
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
};

export default function App() {
  const [form, setForm] = useState(initialValues);

  const handleSubmit = () => {
    Alert.alert(JSON.stringify(form));
    console.log(form);
  };

  const handleInputChange = (name) => (value) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <KeyboardAwareScrollView>
      <View style={styles.app}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add New Patient</Text>
        </View>
        <Text style={styles.label}>Name</Text>
        <Form
          placeholder="First"
          value={form.first}
          onChange={handleInputChange("first")}
        />
        <Form
          placeholder="Middle"
          value={form.middle}
          onChange={handleInputChange("middle")}
        />
        <Form
          placeholder="Last"
          value={form.last}
          onChange={handleInputChange("last")}
        />
        <Text style={styles.label}>Date of Birth</Text>
        <Form
          placeholder="YYYY"
          value={form.year}
          onChange={handleInputChange("year")}
          maxLength={4}
        />
        <Form
          placeholder="MM"
          value={form.month}
          onChange={handleInputChange("month")}
          maxLength={2}
        />
        <Form
          placeholder="DD"
          value={form.day}
          onChange={handleInputChange("day")}
          maxLength={2}
        />
        <SubmitButton onPress={handleSubmit} />
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 20,
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
