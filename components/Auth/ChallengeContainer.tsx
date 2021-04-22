import React from "react";
import styled from "@emotion/native";
import { Text } from "react-native";
import { Button } from "../../components/Button";
import { INaviProps } from "../../navigators/AuthStackNavi";
/**
 * 챌린지설정
 * @param goNext
 */
const ChallengeContainer = ({ goNext }: INaviProps) => {
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
        {`오늘의 챌린지 세우기`}
      </Text>
      <Text
        numberOfLines={1}
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
        {`우리 오늘은 얼마나 걸어볼까요?`}
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

export default ChallengeContainer;

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
