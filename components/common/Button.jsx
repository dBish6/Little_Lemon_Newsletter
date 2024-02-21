import { Pressable, Text, StyleSheet } from "react-native";
import { pYellow, pGreen, wH, mdH, bH } from "../../styles";

const s = StyleSheet.create({
  btn: {
    backgroundColor: pYellow,
    flexDirection: "row",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
    // width: "100%",
  },
  btnDisabled: {
    backgroundColor: "grey",
    opacity: 0.5,
  },
  text: {
    fontSize: mdH,
    color: bH,
  },
});

const Button = ({ children, style, type, onPress, disabled }) => {
  return (
    <Pressable
      style={[
        s.btn,
        type === "green" && { backgroundColor: pGreen },
        style && { ...style },
        disabled && s.btnDisabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={[s.text, type === "green" && { color: wH }]}>
        {children}
      </Text>
    </Pressable>
  );
};

export default Button;
