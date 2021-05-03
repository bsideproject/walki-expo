/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Social } from "./globalTypes";

// ====================================================
// GraphQL query operation: SignIn
// ====================================================

export interface SignIn_signIn {
  __typename: "SignInResult";
  accessToken: string | null;
}

export interface SignIn {
  signIn: SignIn_signIn | null;
}

export interface SignInVariables {
  social: Social;
  token: string;
}
