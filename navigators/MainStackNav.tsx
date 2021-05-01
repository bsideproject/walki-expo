import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainTabNav } from "./MainTabNav";
import { SettingStackNav } from "./SettingStackNav";
import { Platform } from "react-native";

const Stack = createStackNavigator();

export const MainStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "transparent",
        headerStyle: {
          height: Platform.OS === "ios" ? 0 : 35,
          elevation: 0, // remove shadow on Android
          shadowOpacity: 0, // remove shadow on iOS
          backgroundColor: "#f2f2f2",
        },
      }}
      mode="card"
    >
      <Stack.Screen name="MainTabNav" component={MainTabNav} />
      <Stack.Screen name="SettingStackNav" component={SettingStackNav} />
    </Stack.Navigator>
  );
};
