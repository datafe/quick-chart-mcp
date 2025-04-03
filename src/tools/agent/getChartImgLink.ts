import Client from "../../Client/index.js";
import { quickChartUrl } from "../../constants/index.js";

type Error = {
  message?: string;
  data?: { [name: string]: string };
};

export interface CodeInfo { code: string; description?: string; descriptionEn?: string; }

export default async function getChartImgLink(
  agent: Client,
  c: string,
) {
  try {

    // check need to encodeURIComponent
    if (c && (c?.includes('{') || c?.includes(',') || c?.includes('['))) {
      c = encodeURIComponent(c);
    }

    const response = `${quickChartUrl}?c=${c || ''}`;

    return response;

  } catch (error: any) {
    throw new Error(`getChartImgLink failed: ${error.message}`);
  }
}
