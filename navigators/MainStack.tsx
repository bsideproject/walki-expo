import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainTabs } from "./MainTabs";
import { SettingStack } from "./SettingStack";

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} mode="card">
      <Stack.Screen name="MainTabs" component={MainTabs} />
      <Stack.Screen name="SettingStack" component={SettingStack} />
    </Stack.Navigator>
  );
};
