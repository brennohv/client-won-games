/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProfile
// ====================================================

export interface QueryProfile_user {
  __typename: "UsersPermissionsUser";
  id: string;
  username: string;
  email: string;
}

export interface QueryProfile {
  user: QueryProfile_user | null;
}

export interface QueryProfileVariables {
  identifier: string;
}
