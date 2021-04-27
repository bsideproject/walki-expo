import React from "react";
import {
  createStackNavigator,
  StackHeaderLeftButtonProps,
  StackNavigationProp,
} from "@react-navigation/stack";
import { View } from "react-native";
import LoginScreen from "../screens/auth/Login";
import ConfigScreen from "../screens/auth/Config";
import CoachConfigScreen from "../screens/auth/CoachConfig";
import ChallengeConfigScreen from "../screens/auth/ChallengeConfig";
import AlarmConfigScreen from "../screens/auth/AlarmConfig";
import StartScreen from "../screens/auth/Start";
import { SvgXml } from "react-native-svg";
import { icons } from "../styles/icons";

const Stack = createStackNavigator();

export const AuthStackNavi = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 110,
          shadowColor: "transparent",
          backgroundColor: "#fff",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen name="Onboarding" component={LoginScreen} />
      <Stack.Screen name="Config" component={ConfigScreen} />
      <Stack.Screen
        name="Coach"
        component={CoachConfigScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props: StackHeaderLeftButtonProps) => (
            <View style={{ paddingLeft: 18 }}>
              <SvgXml
                xml={icons.chevron.left}
                onPress={() => navigation.navigate("Config")}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Challenge"
        component={ChallengeConfigScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props: StackHeaderLeftButtonProps) => (
            <View style={{ paddingLeft: 18 }}>
              <SvgXml
                xml={icons.chevron.left}
                onPress={() => navigation.navigate("Coach")}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Alarm"
        component={AlarmConfigScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props: StackHeaderLeftButtonProps) => (
            <View style={{ paddingLeft: 18 }}>
              <SvgXml
                xml={icons.chevron.left}
                onPress={() => navigation.navigate("Challenge")}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props: StackHeaderLeftButtonProps) => (
            <View style={{ paddingLeft: 18 }}>
              <SvgXml
                xml={icons.chevron.left}
                onPress={() => navigation.navigate("Alarm")}
              />
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
};
export type AuthStackNaviParamList = {
  Onboarding: undefined;
  Config: undefined;
  Coach: undefined;
  Challenge: undefined;
  Alarm: undefined;
  Start: undefined;
  Home: undefined;
};

export type NavigationProp = StackNavigationProp<
  AuthStackNaviParamList,
  "Onboarding"
>;
export interface IAuthProps {
  navigation: NavigationProp;
}

export interface INaviProps {
  goNext?: () => void;
  goBack?: () => void;
}
