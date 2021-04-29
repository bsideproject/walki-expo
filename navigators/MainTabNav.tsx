import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/main/Home";
import ReportScreen from "../screens/main/Report";
import RankingScreen from "../screens/main/Ranking";
import { grayScale } from "../styles/theme";

const MainTab = createBottomTabNavigator();

export const MainTabNav = () => {
  return (
    <MainTab.Navigator
      tabBarOptions={{
        style: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          borderWidth: 1,
          borderTopWidth: 1,
          borderColor: grayScale.gray5,
        },
      }}
    >
      <MainTab.Screen
        name="Home"
        options={{ title: "홈" }}
        component={HomeScreen}
      />
      <MainTab.Screen
        name="Report"
        options={{ title: "리포트" }}
        component={ReportScreen}
      />
      <MainTab.Screen
        name="Ranking"
        options={{ title: "전체랭킹" }}
        component={RankingScreen}
      />
    </MainTab.Navigator>
  );
};
