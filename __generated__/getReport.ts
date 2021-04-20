/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { YearMonthInput } from "./globalTypes";

// ====================================================
// GraphQL query operation: getReport
// ====================================================

export interface getReport_getReport_challenges {
  __typename: "Challenge";
  step: number | null;
  stepGoal: number | null;
}

export interface getReport_getReport {
  __typename: "Report";
  stepAchievement: number | null;
  stepGoal: number | null;
  challengeAchievement: number | null;
  challengeGoal: number | null;
  challenges: (getReport_getReport_challenges | null)[] | null;
}

export interface getReport {
  getReport: getReport_getReport | null;
}

export interface getReportVariables {
  yearMonth: YearMonthInput;
}
