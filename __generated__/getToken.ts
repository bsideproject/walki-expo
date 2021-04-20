/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Social } from "./globalTypes";

// ====================================================
// GraphQL query operation: getToken
// ====================================================

export interface getToken_signIn {
  __typename: "SignInResult";
  accessToken: string | null;
}

export interface getToken {
  signIn: getToken_signIn | null;
}

export interface getTokenVariables {
  social: Social;
  token: string;
}
