
/** quick chart api 接口 */
export const quickChartUrl = process.env.QUICK_CHART_DRAW_URL || 'https://quickchart.io/chart';


export enum EnumAction {
  'ENCODE_JSON_INTO_LINK_PARAMETERS' = 'EncodeJsonIntoLinkParameters',
  'GET_CHART_IMG_LINK' = 'GetChartImgLink',
  'INSTALL_QUICK_CHART' = 'InstallQuickChart',
}