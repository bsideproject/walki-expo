import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type HomeScreenNavigationProp = StackNavigationProp<
  MainStackParamList,
  "MainTabs"
>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate("SettingStack")}>
        <View>
          <Text>HomeScreen</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
