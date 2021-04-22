import React from "react";
import styled from "@emotion/native";
import { Text } from "react-native";
import { Button } from "../../components/Button";

import { INaviProps } from "../../navigators/AuthStackNavi";
/**
 * 알람설정
 * @param goNext
 */
const AlarmContainer = ({ goNext }: INaviProps) => {
  return (
    <Container>
      <Text
        numberOfLines={1}
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
        {`알림 시간 설정`}
      </Text>
      <Text
        numberOfLines={3}
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
        {`매일 목표 걸음 수를 입력할 시간을 설정해볼까요?\n당신을 응원하기 위해 토키가 매일 알림을\n보내드려요! 시간은 나중에 변경할 수 있어요. `}
      </Text>
      <BottomContainer>
        <ButtonWrapper>
          <Button
            text="다음"
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

export default AlarmContainer;
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
