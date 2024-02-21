import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../components/screens/Welcome";
import Subscribe from "../components/screens/Subscribe";

import { pYellow, bH, pGreen, wH } from "../styles";

const Stack = createNativeStackNavigator(),
  RootNavigator = () => {
    return (
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerStyle: { backgroundColor: pYellow },
          headerTintColor: bH,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerStyle: { backgroundColor: pYellow },
            headerTintColor: bH,
          }}
        />
        <Stack.Screen
          name="Subscribe"
          component={Subscribe}
          options={{
            headerStyle: { backgroundColor: pGreen },
            headerTintColor: wH,
          }}
        />
      </Stack.Navigator>
    );
  };

export default RootNavigator;
