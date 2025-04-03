
import getChartImgLink from "./agent/getChartImgLink.js";
import installQuickChart from "./agent/installQuickChart.js";
import { EnumAction } from "../constants/index.js";

const ACTIONS: any = {
  [EnumAction.GET_CHART_IMG_LINK]: getChartImgLink,
}

if (process.env.NEED_INSTALL_QUICK_CHART === 'true') {
  ACTIONS[EnumAction.INSTALL_QUICK_CHART] = installQuickChart;
}

export { ACTIONS };

export type { ActionTool, ActionExample, Handler } from "../types/action.js";
