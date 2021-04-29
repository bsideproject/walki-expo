import React from "react";
import { Header } from "../../components/Setting/Header";
import styled from "@emotion/native";
import { SafeLayout } from "../../layouts/SafeLayout";
import { View } from "react-native";

import RightIcon from "../../assets/icons/chevron/right.svg";

const AppSettingScreen = () => {
  return (
    <SafeLayout backgroundColor="white">
      <Header hasBack />
      <Body>
        <Title>앱 설정</Title>
        <Options>
          <OptionItem>
            <View style={{ width: "90%" }}>
              <OptionTitle>푸시설정</OptionTitle>
              <OptionSubtitle>
                {
                  "푸시 알림에 대한 설정은 '휴대폰 설정 > walki > 알림'에서 변경할 수 있습니다."
                }
              </OptionSubtitle>
            </View>
            <OptionAction>
              <OptionActionText>ON</OptionActionText>
            </OptionAction>
          </OptionItem>
          <OptionItem>
            <OptionTitle>내 운동 정보 이용</OptionTitle>
            <OptionAction>
              <OptionActionText>ON</OptionActionText>
            </OptionAction>
          </OptionItem>
          <OptionItem>
            <OptionTitle>알림설정</OptionTitle>
            <OptionAction>
              <RightIcon />
            </OptionAction>
          </OptionItem>
          <OptionItem>
            <OptionTitle>오픈소스 라이센스</OptionTitle>
            <OptionAction>
              <RightIcon />
            </OptionAction>
          </OptionItem>
        </Options>
      </Body>
    </SafeLayout>
  );
};

export default AppSettingScreen;

const Body = styled.View`
  padding: 0px 16px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 24px;
  margin: 16px 0px;
  margin-bottom: 46px;

  color: ${props => props.theme.color.gray1};
`;

const Options = styled.View``;

const OptionItem = styled.View`
  padding-bottom: 16px;
  margin-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.color.gray6};

  flex-direction: row;
  justify-content: space-between;
`;

const OptionTitle = styled.Text`
  font-size: 16px;

  color: ${props => props.theme.color.gray2};
`;

const OptionSubtitle = styled.Text`
  font-size: 14px;
  margin-top: 10px;

  color: ${props => props.theme.color.gray3};
`;

const OptionAction = styled.TouchableOpacity``;

const OptionActionText = styled.Text``;
