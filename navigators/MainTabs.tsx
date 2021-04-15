import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/main/Home";
import ReportScreen from "../screens/main/Report";
import RankingScreen from "../screens/main/Ranking";

const Tabs = createBottomTabNavigator();

export const MainTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeScreen} />
      <Tabs.Screen name="Report" component={ReportScreen} />
      <Tabs.Screen name="Ranking" component={RankingScreen} />
    </Tabs.Navigator>
  );
};
