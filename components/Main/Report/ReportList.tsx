import React, { useCallback } from "react";
import styled from "@emotion/native";

import { ReportCard } from "./ReportCard";
import { useQuery } from "@apollo/client";
import {
  getReport,
  getReportVariables,
  getReport_getReport_challenges,
} from "../../../__generated__/getReport";
import { GET_REPORT_QUERY } from "../../../queries";

export const ReportList = () => {
  const { data } = useQuery<getReport, getReportVariables>(GET_REPORT_QUERY, {
    variables: {
      yearMonth: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
      },
    },
  });

  const renderReportCard = useCallback(
    (item: getReport_getReport_challenges, index) => (
      <ReportCard
        key={index}
        index={index + 1}
        success={item.step === item.stepGoal}
        step={item.step || 0}
        stepGoal={item.stepGoal || 0}
      />
    ),
    []
  );
  return (
    <Container>
      <Title>디즈니덕후 님의 데일리 챌린지 히스토리</Title>
      <List>
        {data?.getReport?.challenges
          ?.map((item, index) => item && renderReportCard(item, index))
          .reverse()}
      </List>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${props => props.theme.color.white};
`;

const Title = styled.Text`
  padding: 24px 16px;
`;

const List = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 16px;
  padding-bottom: 24px;
`;
