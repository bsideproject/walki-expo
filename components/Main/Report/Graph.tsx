import React, { useEffect, useState } from "react";
import styled from "@emotion/native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { theme } from "../../../styles/theme";
import { useQuery } from "@apollo/client";
import {
  getReport,
  getReportVariables,
} from "../../../__generated__/getReport";
import { GET_REPORT_QUERY } from "../../../queries";

export const Graph = () => {
  const { data } = useQuery<getReport, getReportVariables>(GET_REPORT_QUERY, {
    variables: {
      yearMonth: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
      },
    },
  });

  const [stepFill, setStepFill] = useState(0);
  const [challengeFill, setChallengeFill] = useState(0);

  useEffect(() => {
    if (
      typeof data?.getReport?.stepAchievement === "number" &&
      typeof data.getReport.stepGoal === "number"
    ) {
      setStepFill(
        (data.getReport.stepAchievement / data.getReport.stepGoal) * 100
      );
    }
    if (
      typeof data?.getReport?.challengeAchievement === "number" &&
      typeof data.getReport.challengeGoal === "number"
    ) {
      setChallengeFill(
        (data.getReport.challengeAchievement / data.getReport.challengeGoal) *
          100
      );
    }
  }, [data]);

  return (
    <Container>
      <Title>이번달도 토키와 함께 목표를 이뤄봐요!</Title>
      <GraphContainer>
        <Info>
          <InfoTitle>걸음 수</InfoTitle>
          <StepContent>
            {data?.getReport?.stepAchievement} / {data?.getReport?.stepGoal}
            걸음
          </StepContent>

          <InfoTitle>달성률</InfoTitle>
          <CompletedContent>{challengeFill} / 100 %</CompletedContent>

          <InfoTitle>달성일 수</InfoTitle>
          <DayContent>
            {data?.getReport?.challengeAchievement} /{" "}
            {data?.getReport?.challengeGoal} 일
          </DayContent>
        </Info>
        <GraphBody>
          <AnimatedCircularProgress
            size={123}
            width={14}
            tintColor={theme.toki.color.main}
            backgroundColor={`${theme.toki.color.character.sub}60`}
            rotation={0}
            lineCap="round"
            fill={stepFill}
            duration={2000}
          >
            {() => (
              <AnimatedCircularProgress
                size={86}
                width={14}
                tintColor={theme.toki.color.chart.main}
                backgroundColor={`${theme.toki.color.chart.sub}60`}
                rotation={0}
                lineCap="round"
                fill={challengeFill}
                duration={2000}
              >
                {() => (
                  <AnimatedCircularProgress
                    size={50}
                    width={14}
                    tintColor={theme.booki.color.main}
                    backgroundColor={`${theme.booki.color.character.sub}60`}
                    rotation={0}
                    lineCap="round"
                    fill={challengeFill}
                    duration={2000}
                  />
                )}
              </AnimatedCircularProgress>
            )}
          </AnimatedCircularProgress>
        </GraphBody>
      </GraphContainer>
    </Container>
  );
};

const Container = styled.View`
  padding: 0px 16px;
  margin-bottom: 26px;
`;

const Title = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;

  color: ${props => props.theme.color.gray2};

  margin-bottom: 16px;
`;

const GraphContainer = styled.View`
  padding: 16px;
  border-radius: 16px;

  background-color: ${props => props.theme.color.white};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.View``;

const InfoTitle = styled.Text`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  color: ${props => props.theme.color.gray1};
`;

const StepContent = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: #f22764;

  margin-bottom: 8px;
`;

const CompletedContent = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: #51b5ff;

  margin-bottom: 8px;
`;

const DayContent = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  color: #8ad10a;
`;

const GraphBody = styled.View``;
