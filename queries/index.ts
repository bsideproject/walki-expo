import { gql } from "@apollo/client";

export const GET_COACHES_QUERY = gql`
  query getCoaches {
    getCoaches {
      id
      name
      description
    }
  }
`;
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
export const SIGNIN_QUERY = gql`
  query SignIn($social: Social!, $token: String!) {
    signIn(social: $social, token: $token) {
      accessToken
      __typename
    }
  }
`;
export const SIGNUP_MUTATION = gql`
  mutation SignUp($social: Social!, $token: String!) {
    signUp(social: $social, token: $token)
  }
`;
export const PUT_CHALLENGE_MUTATION = gql`
  mutation putChallenge($challenge: ChallengeInput) {
    putChallenge(challenge: $challenge) {
      challengeDate
      step
      stepGoal
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
