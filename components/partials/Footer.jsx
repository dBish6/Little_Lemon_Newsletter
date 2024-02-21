import { StyleSheet, View, Text } from "react-native";
import { bP, smP } from "../../styles";

const s = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: smP,
    fontStyle: "italic",
    color: bP,
    opacity: 0.8,
    textAlign: "center",
  },
});

const Footer = () => {
  return (
    <View style={s.container}>
      <Text style={s.text}>© Little Lemon 2024</Text>
    </View>
  );
};

export default Footer;
