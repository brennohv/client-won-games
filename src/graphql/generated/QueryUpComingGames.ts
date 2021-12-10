/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryUpComingGames
// ====================================================

export interface QueryUpComingGames_upcomingGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpComingGames_upcomingGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryUpComingGames_upcomingGames {
  __typename: "Game";
  id: string;
  name: string;
  slug: string;
  price: number;
  cover: QueryUpComingGames_upcomingGames_cover | null;
  developers: QueryUpComingGames_upcomingGames_developers[];
}

export interface QueryUpComingGames_showCase_upcomingGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpComingGames_showCase_upcomingGames_highlight_floatImage {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpComingGames_showCase_upcomingGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryUpComingGames_showCase_upcomingGames_highlight_background | null;
  floatImage: QueryUpComingGames_showCase_upcomingGames_highlight_floatImage | null;
  buttonLabel: string;
  buttonLink: string;
  alignment: ENUM_COMPONENTPAGEHIGHLIGHT_ALIGNMENT | null;
}

export interface QueryUpComingGames_showCase_upcomingGames {
  __typename: "ComponentPageSection";
  title: string | null;
  highlight: QueryUpComingGames_showCase_upcomingGames_highlight | null;
}

export interface QueryUpComingGames_showCase {
  __typename: "Home";
  upcomingGames: QueryUpComingGames_showCase_upcomingGames | null;
}

export interface QueryUpComingGames {
  upcomingGames: QueryUpComingGames_upcomingGames[];
  showCase: QueryUpComingGames_showCase | null;
}

export interface QueryUpComingGamesVariables {
  date: any;
}
