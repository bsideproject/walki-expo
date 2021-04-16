import React from "react";
import styled from "@emotion/native";
import { SafeLayout } from "../../layouts/SafeLayout";
import { Header } from "../../components/Ranking/Header";
import { MyRanking } from "../../components/Ranking/MyRanking";
import { TopRanking } from "../../components/Ranking/TopRanking";

const RankingScreen = () => {
  return (
    <SafeLayout>
      <Container>
        <Header />
        <MyRankingContainer>
          <MyRanking />
        </MyRankingContainer>
        <TopRanking />
      </Container>
    </SafeLayout>
  );
};

export default RankingScreen;

const Container = styled.View`
  flex: 1;
`;

const MyRankingContainer = styled.View`
  padding: 16px;
`;
