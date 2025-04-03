import Client from "../../Client/index.js";
import bestEffortForJson from "../../utils/bestEffortForJson.js";
import { quickChartUrl } from "../../constants/index.js";

type Error = {
  message?: string;
  data?: { [name: string]: string };
};

export interface CodeInfo { code: string; description?: string; descriptionEn?: string; }

export default async function getChartImgLink(
  agent: Client,
  json: any,
) {
  try {

    let jsonStr = '{}';
    try {
      jsonStr = JSON.stringify(json || '{}');
    } catch (e) {
      console.error(e);
    }
    if (jsonStr && (jsonStr?.includes('{') || jsonStr?.includes(',') || jsonStr?.includes('['))) {
      jsonStr = bestEffortForJson(jsonStr);
      jsonStr = encodeURIComponent(jsonStr); // check need to encodeURIComponent
    }

    const response = `${quickChartUrl}?c=${jsonStr || ''}`;

    return response;

  } catch (error: any) {
    throw new Error(`getChartImgLink failed: ${error.message}`);
  }
}
