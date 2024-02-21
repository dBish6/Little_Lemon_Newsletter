import { useState } from "react";
import { StyleSheet, View, Image, Text, TextInput, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";

import { validateEmail } from "../../utils";

import Button from "../common/Button";

import { bgColour, bH, mdH, mdP, cInput } from "../../styles";
import logoSec from "../../assets/little-lemon-logo-secondary.png";

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: bgColour,
  },
  logo: {
    height: 100,
    width: 300,
    resizeMode: "contain",
    marginBottom: 32,
  },
  heading: {
    color: bH,
    textAlign: "center",
    fontSize: mdH,
  },
  input: {
    width: "100%",
    height: 40,
    marginTop: 32,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: mdP,
    backgroundColor: cInput,
    borderColor: "grey",
  },
  errorContainer: {
    alignItems: "flex-start",
    width: "100%",
  },
  error: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginBottom: 24,
    borderRadius: 8,
    fontWeight: "500",
    color: bH,
    backgroundColor: "#EF4362",
  },
});

const Subscribe = () => {
  const [data, setData] = useState({ email: "", password: "" }),
    [form, setForm] = useState({ submitted: false, error: "" });

  const submit = () => {
    const isValid = validateEmail(data.email);

    isValid
      ? Alert.alert("Thanks for subscribing, stay tuned!")
      : setForm({ ...form, error: "Please provide a valid email." });
  };

  const onChange = (text) => {
    form.error.length && setForm({ ...form, error: "" });
    setData({ ...data, email: text });
  };

  return (
    <View style={s.container}>
      <StatusBar style="light" />

      <Image style={s.logo} source={logoSec} />
      <Text style={s.heading}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>

      <TextInput
        style={[
          s.input,
          {
            marginBottom: form.error.length > 0 ? 8 : 24,
          },
        ]}
        value={data.email}
        onChangeText={(text) => onChange(text)}
        placeholder="Your email address"
        keyboardType="email-address"
        textContentType="emailAddress"
      />
      <View style={s.errorContainer}>
        {form.error.length > 0 && <Text style={s.error}>{form.error}</Text>}
      </View>

      <Button
        type="green"
        style={{ width: "100%" }}
        onPress={() => submit()}
        disabled={form.error.length > 0}
      >
        Subscribe
      </Button>
    </View>
  );
};

export default Subscribe;
