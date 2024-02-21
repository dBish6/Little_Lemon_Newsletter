import { StyleSheet, View, Image, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

import Button from "../common/Button";

import { bgColour, mdH, bH } from "../../styles";
import logo from "../../assets/little-lemon-logo.png";

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 24,
    alignItems: "center",
    backgroundColor: bgColour,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 200,
    width: 300,
    resizeMode: "contain",
  },
  heading: {
    marginTop: 48,
    paddingVertical: 10,
    textAlign: "center",
    fontSize: mdH,
    fontWeight: "bold",
    color: bH,
  },
});

const Welcome = ({ navigation }) => {
  return (
    <View style={s.container}>
      <StatusBar style="dark" />
      <View style={s.content}>
        <Image
          accessible={true}
          accessibilityLabel="Little Lemon Logo"
          style={s.logo}
          source={logo}
        />
        <Text style={s.heading}>
          Little Lemon, your local Mediterranean Bistro
        </Text>
      </View>

      <Button
        type="yellow"
        style={{ width: "100%" }}
        onPress={() => navigation.navigate("Subscribe")}
      >
        Newsletter
      </Button>
    </View>
  );
};

export default Welcome;
