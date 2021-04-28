/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Social } from "./globalTypes";

// ====================================================
// GraphQL query operation: getMember
// ====================================================

export interface getMember_getMember_coach {
  __typename: "Coach";
  id: any | null;
  name: string | null;
  description: string | null;
}

export interface getMember_getMember {
  __typename: "Member";
  id: any | null;
  social: Social | null;
  socialId: string | null;
  name: string | null;
  profileImage: string | null;
  coach: getMember_getMember_coach | null;
}

export interface getMember {
  getMember: getMember_getMember | null;
}
