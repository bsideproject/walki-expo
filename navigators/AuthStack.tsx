import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../screens/auth/Onboarding";
import SetupScreen from "../screens/auth/Setup";
import CoachScreen from "../screens/auth/Coach";
import ChallengeScreen from "../screens/auth/Challenge";
import FinishScreen from "../screens/auth/Finish";

const Stack = createStackNavigator();

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Setup" component={SetupScreen} />
      <Stack.Screen name="Coach" component={CoachScreen} />
      <Stack.Screen name="Challenge" component={ChallengeScreen} />
      <Stack.Screen name="Finish" component={FinishScreen} />
    </Stack.Navigator>
  );
};
