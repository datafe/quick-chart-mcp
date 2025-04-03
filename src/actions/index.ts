
import getChartImgLink from "./agent/getChartImgLink.js";
// import encodeJsonIntoLinkParameters from "./agent/encodeJsonIntoLinkParameters.js";
import { EnumAction } from "../constants/index.js";

export const ACTIONS = {
  // [EnumAction.ENCODE_JSON_INTO_LINK_PARAMETERS]: encodeJsonIntoLinkParameters,
  [EnumAction.GET_CHART_IMG_LINK]: getChartImgLink,
}

export type { ActionTool, ActionExample, Handler } from "../types/action.js";
