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

export const GET_MEMBER_QUERY = gql`
  query getMember {
    getMember {
      id
      name
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
