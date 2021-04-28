import React from "react";
import styled from "@emotion/native";
import dayjs from "dayjs";

interface IRankBoxProps {
  prevDay?: boolean;
}

export const RankBox: React.VFC<IRankBoxProps> = ({ prevDay = false }) => {
  return (
    <Container prevDay={prevDay}>
      <DateText>
        {prevDay
          ? dayjs(new Date()).add(-1, "day").format("MM/DD")
          : dayjs(new Date()).add(-2, "day").format("MM/DD")}
      </DateText>
      <RankTextContainer>
        <RankNumber prevDay={prevDay}>0</RankNumber>
        <RankText>위</RankText>
      </RankTextContainer>
    </Container>
  );
};

const Container = styled.View<{ prevDay: boolean }>`
  padding: 8px 30px;
  background-color: ${props =>
    props.prevDay ? props.theme.color.white : props.theme.color.gray6};
  border-radius: 8px;

  justify-content: center;
  align-items: center;
  margin-right: 8px;

  elevation: 2;
`;

const DateText = styled.Text`
  margin-bottom: 2px;
  font-size: 12px;
  color: ${props => props.theme.color.gray1};
`;

const RankTextContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RankNumber = styled.Text<{ prevDay: boolean }>`
  font-size: 24px;
  font-weight: bold;
  margin-right: 4px;
  color: ${props =>
    props.prevDay ? props.theme.color.main : props.theme.color.gray1};
`;

const RankText = styled.Text``;
