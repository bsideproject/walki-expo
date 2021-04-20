import { gql } from "@apollo/client";

export const GET_REPORT_QUERY = gql`
  query getReport($yearMonth: YearMonthInput!) {
    getReport(yearMonth: $yearMonth) {
      stepAchievement
      stepGoal
      challengeAchievement
      challengeGoal
      challenges {
        step
        stepGoal
      }
    }
  }
`;
