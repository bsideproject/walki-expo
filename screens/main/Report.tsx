import React from "react";
import styled from "@emotion/native";
import { SafeLayout } from "../../layouts/SafeLayout";
import { Header } from "../../components/Main/Report/Header";
import { Graph } from "../../components/Main/Report/Graph";
import { ReportList } from "../../components/Main/Report/ReportList";

const ReportScreen = () => {
  return (
    <SafeLayout>
      <Container>
        <Header />
        <Graph />
        <ReportList />
      </Container>
    </SafeLayout>
  );
};

export default ReportScreen;

const Container = styled.View`
  flex: 1;
`;
