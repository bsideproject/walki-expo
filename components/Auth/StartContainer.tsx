import React from "react";
import styled from "@emotion/native";
import { Text } from "react-native";
import { Button } from "../../components/Button";
import { INaviProps } from "../../navigators/AuthStackNavi";
/**
 * 알람설정
 * @param goNext
 */
const StartContainer = ({ goNext }: INaviProps) => {
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
        {`이제 서비스를 사용할 준비가\n완료 되었어요!`}
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
        {`토키와 함께 달려보세요! 여러분의 코치가\n도와줄거예요!`}
      </Text>
      <BottomContainer>
        <ButtonWrapper>
          <Button
            text="그럼 이제 시작해 볼까요?"
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

export default StartContainer;
const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.color.white};
`;
const ButtonWrapper = styled.View`
  margin: 35px;
`;
const BottomContainer = styled.View`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 100;
`;
