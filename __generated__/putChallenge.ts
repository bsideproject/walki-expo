/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ChallengeInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: putChallenge
// ====================================================

export interface putChallenge_putChallenge {
  __typename: "Challenge";
  challengeDate: any;
  step: number | null;
  stepGoal: number | null;
}

export interface putChallenge {
  putChallenge: putChallenge_putChallenge | null;
}

export interface putChallengeVariables {
  challenge?: ChallengeInput | null;
}
