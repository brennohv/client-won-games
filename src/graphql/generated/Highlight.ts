/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL fragment: Highlight
// ====================================================

export interface Highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface Highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface Highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: Highlight_background | null;
  floatImage: Highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}
