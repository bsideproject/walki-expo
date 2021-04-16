import React, { useCallback } from "react";
import styled from "@emotion/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/Setting/Header";
import { SvgXml } from "react-native-svg";
import { icons } from "../../styles/icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/core";

type SettingHomeScreenNavigationProp = StackNavigationProp<
  SettingStackParamList,
  "Home"
>;

const HomeScreen = () => {
  const navigation = useNavigation<SettingHomeScreenNavigationProp>();

  const goToMyAccount = useCallback(() => {
    navigation.navigate("MyAccount");
  }, []);

  const goToAppSetting = useCallback(() => {
    navigation.navigate("AppSetting");
  }, []);

  return (
    <SafeAreaView>
      <Header hasClose />
      <Container>
        <Title>설정</Title>
        <Menu>
          <MenuItem onPress={goToMyAccount}>
            <MenuItemText>내 계정</MenuItemText>
            <MenuItemRight>
              <SvgXml xml={icons.chevron.right} />
            </MenuItemRight>
          </MenuItem>
          <MenuItem onPress={goToAppSetting}>
            <MenuItemText>앱 설정</MenuItemText>
            <MenuItemRight>
              <SvgXml xml={icons.chevron.right} />
            </MenuItemRight>
          </MenuItem>
        </Menu>
      </Container>
    </SafeAreaView>
  );
};

export default HomeScreen;

const Container = styled.ScrollView`
  padding: 0px 16px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
`;

const Menu = styled.View``;

const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 16px 0px;
  border-bottom-width: 0.5px;
`;

const MenuItemText = styled.Text`
  font-size: 16px;
`;

const MenuItemRight = styled.View``;
