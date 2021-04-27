/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MemberInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: putMember
// ====================================================

export interface putMember_putMember {
  __typename: "Member";
  id: any | null;
  name: string | null;
}

export interface putMember {
  putMember: putMember_putMember | null;
}

export interface putMemberVariables {
  member?: MemberInput | null;
}
