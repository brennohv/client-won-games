/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_SIZE, ENUM_COMPONENTPAGERIBBON_COLOR } from "./globalTypes";

// ====================================================
// GraphQL fragment: BannerFragment
// ====================================================

export interface BannerFragment_image {
  __typename: "UploadFile";
  url: string;
}

export interface BannerFragment_button {
  __typename: "ComponentPageButton";
  label: string;
  link: string;
}

export interface BannerFragment_ribbon {
  __typename: "ComponentPageRibbon";
  text: string | null;
  size: ENUM_COMPONENTPAGERIBBON_SIZE | null;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
}

export interface BannerFragment {
  __typename: "Banner";
  image: BannerFragment_image | null;
  title: string;
  subtitle: string;
  button: BannerFragment_button | null;
  ribbon: BannerFragment_ribbon | null;
}
