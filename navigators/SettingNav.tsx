import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/setting/Home";
import AppSettingScreen from "../screens/setting/AppSetting";
import MyAccountScreen from "../screens/setting/MyAccount";

const Stack = createStackNavigator();

export const SettingNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MyAccount" component={MyAccountScreen} />
      <Stack.Screen name="AppSetting" component={AppSettingScreen} />
    </Stack.Navigator>
  );
};
