/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMyRankings
// ====================================================

export interface getMyRankings_getMyRankings {
  __typename: "Ranking";
  number: any | null;
  challengeDate: any | null;
}

export interface getMyRankings {
  getMyRankings: (getMyRankings_getMyRankings | null)[] | null;
}

export interface getMyRankingsVariables {
  start: any;
  end: any;
}
