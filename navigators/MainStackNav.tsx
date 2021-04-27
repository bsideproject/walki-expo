import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainTabNav } from "./MainTabNav";
import { SettingStackNav } from "./SettingStackNav";

const Stack = createStackNavigator();

export const MainStackNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} mode="card">
      <Stack.Screen name="MainTabNav" component={MainTabNav} />
      <Stack.Screen name="SettingStackNav" component={SettingStackNav} />
    </Stack.Navigator>
  );
};
