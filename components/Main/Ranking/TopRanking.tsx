import React from "react";
import styled from "@emotion/native";
import { Ranker } from "./Ranker";

export const TopRanking = () => {
  return (
    <Container>
      <Title>Top 10</Title>
      {new Array(10).fill(0).map((item, index) => (
        <Ranker key={index} />
      ))}
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
  padding: 0px 16px;
`;

const Title = styled.Text`
  margin-top: 20px;
  margin-bottom: 22px;
  font-size: 20px;
  font-weight: 600;
  font-style: italic;
`;
