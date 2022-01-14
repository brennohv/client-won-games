/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryProfile
// ====================================================

export interface QueryProfile_me {
  __typename: "UsersPermissionsMe";
  username: string;
  email: string;
}

export interface QueryProfile {
  me: QueryProfile_me | null;
}
