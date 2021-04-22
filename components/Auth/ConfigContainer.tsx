import React from "react";
import { Text } from "react-native";
import { Button } from "../../components/Button";
import styled from "@emotion/native";

import { INaviProps } from "../../navigators/AuthStackNavi";
/**
 * 초기설정
 * @param goNext
 */
const ConfigContainer = ({ goNext }: INaviProps) => {
  return (
    <Container>
      <Text
        numberOfLines={2}
        adjustsFontSizeToFit
        style={{
          textAlign: "left",
          fontWeight: "600",
          fontSize: 24,
          lineHeight: 36,
          marginBottom: 10,
          marginLeft: 16,
        }}
      >
        {`서비스를 이용하기 전\n간단한 설정이 필요해요.`}
      </Text>
      <Text
        numberOfLines={2}
        adjustsFontSizeToFit
        style={{
          textAlign: "left",
          fontWeight: "400",
          fontSize: 16,
          lineHeight: 24,
          marginBottom: 70,
          marginLeft: 16,
        }}
      >
        {`모든 설정을 완료하면, walki가 제공하는 모든\n서비스 이용이 가능해요!`}
      </Text>
      <BottomContainer>
        <ButtonWrapper>
          <Button
            text="설정 진행하러 가기"
            onPress={() => {
              if (typeof goNext === "function") goNext();
            }}
            type="secondary"
          />
        </ButtonWrapper>
      </BottomContainer>
    </Container>
  );
};

export default ConfigContainer;

const Container = styled.View`
  flex: 1;
  padding-top: 16px;
  background-color: ${({ theme }) => theme.color.white};
`;
const ButtonWrapper = styled.View`
  margin: 75px 37px;
`;
const BottomContainer = styled.View`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 100;
`;
