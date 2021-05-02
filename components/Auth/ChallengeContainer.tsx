import React, { useEffect } from "react";
import styled from "@emotion/native";
import { Text, TextInput, View } from "react-native";
import TextLink from "../../components/TextLink";
import { Button } from "../../components/Button";
import { INaviProps } from "../../navigators/AuthStackNavi";
import { tokenVar, coachVar, challengeVar } from "../../common/apollo";
import { useMutation } from "@apollo/client";
import { PUT_CHALLENGE_MUTATION } from "../../queries";
import {
  putChallenge,
  putChallengeVariables,
} from "../../__generated__/putChallenge";

/**
 * 챌린지설정
 * @param goNext
 */
const ChallengeContainer = ({ goNext }: INaviProps) => {
  const [number, onChangeNumber] = React.useState<number>(0);
  const [putChallenge, { data: challengeData }] = useMutation<
    putChallenge,
    putChallengeVariables
  >(PUT_CHALLENGE_MUTATION);
  useEffect(() => {
    console.log("tokenVar : " + tokenVar());
  }, []);
  const getDate = () => {
    const now = new Date();
    return now.toISOString().split("T")[0];
  };
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
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={{
            width: "50%",
            borderBottomWidth: 1,
            padding: 10,
            paddingBottom: 2,
            fontStyle: "italic",
            fontWeight: "bold",
            fontSize: 64,
            lineHeight: 80,
            textAlign: "center",
          }}
          keyboardType="numeric"
          onChangeText={(value) => {
            onChangeNumber(Number(value));
          }}
          value={String(number)}
        />
        <Text style={{ padding: 5, paddingTop: 65 }}>걸음 </Text>
      </View>

      <BottomContainer>
        <ButtonWrapper>
          <Button
            text="다음"
            onPress={() => {
              if (number > 0 && number < 100000) {
                challengeVar(number);
                putChallenge({
                  variables: {
                    challenge: {
                      challengeDate: getDate(),
                      step: 0,
                      stepGoal: number,
                    },
                  },
                })
                  .then((res) => console.log("putChallenge Success: " + res))
                  .catch((e) => console.log("putChallenge Error: " + e));
              }
              if (typeof goNext === "function") goNext();
            }}
            type="secondary"
          />
          <View style={{ marginTop: 20 }}>
            <TextLink
              onPress={() => {
                if (typeof goNext === "function") goNext();
              }}
            >
              나중에 설정할래요
            </TextLink>
          </View>
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
  margin: 35px;
  align-items: center;
`;
const BottomContainer = styled.View`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 100;
`;
