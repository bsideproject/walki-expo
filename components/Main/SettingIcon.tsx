import React, { useCallback } from "react";
import styled from "@emotion/native";
import { SvgXml } from "react-native-svg";
import { icons } from "../../styles/icons";
import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";

type MainStackNavigationProp = StackNavigationProp<
  MainStackParamList,
  "MainTabNav"
>;

export const SettingIcon = () => {
  const navigation = useNavigation<MainStackNavigationProp>();

  const goToSetting = useCallback(() => {
    navigation.navigate("SettingStackNav");
  }, []);

  return (
    <Container onPress={goToSetting}>
      <SvgXml xml={icons.setting} />
    </Container>
  );
};

const Container = styled.TouchableOpacity``;
