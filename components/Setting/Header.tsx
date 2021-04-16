import React, { useCallback } from "react";
import styled from "@emotion/native";
import { SvgXml } from "react-native-svg";
import { icons } from "../../styles/icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/core";

interface IHeaderProps {
  hasBack?: boolean;
  hasClose?: boolean;
}

type SettingStackNavigationProp = StackNavigationProp<
  MainStackParamList,
  "SettingStack"
>;

export const Header: React.VFC<IHeaderProps> = ({
  hasBack = false,
  hasClose = false,
}) => {
  const navigation = useNavigation<SettingStackNavigationProp>();

  const goBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <Container>
      <LeftContainer>
        {hasBack && (
          <Left onPress={goBack}>
            <SvgXml xml={icons.chevron.left} />
          </Left>
        )}
      </LeftContainer>
      <RightContainer>
        {hasClose && (
          <Right onPress={goBack}>
            <Close>{"X"}</Close>
          </Right>
        )}
      </RightContainer>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  height: 60px;
  padding: 0px 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 16px;
`;

const LeftContainer = styled.View``;

const RightContainer = styled.View``;

const Left = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: flex-start;
`;

const Right = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: flex-end;
`;

const Close = styled.Text`
  font-size: 24px;
`;
