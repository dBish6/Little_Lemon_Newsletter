import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./navigators/RootNavigator";
import Footer from "./components/partials/Footer";

import { bgColour } from "./styles";

const s = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: bgColour,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={[s.background]}>
        <RootNavigator />

        <Footer />
      </SafeAreaView>
    </NavigationContainer>
  );
}
