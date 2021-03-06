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
export const GET_TOKEN_QUERY = gql`
  query getToken($social: Social!, $token: String!) {
    signIn(social: $social, token: $token) {
      accessToken
      __typename
    }
  }
`;

export const PUT_MEMBER_MUTATION = gql`
  mutation putMember($member: MemberInput) {
    putMember(member: $member) {
      id
      name
    }
  }
`;

export const GET_MY_RANKINGS_QUERY = gql`
  query getMyRankings($start: LocalDate!, $end: LocalDate!) {
    getMyRankings(start: $start, end: $end) {
      number
      challengeDate
    }
  }
`;
