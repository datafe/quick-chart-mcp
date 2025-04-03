import Client from "../../Client/index.js";
import isString from 'lodash/isString.js';

type Error = {
  message?: string;
  data?: { [name: string]: string };
};

export interface CodeInfo { code: string; description?: string; descriptionEn?: string; }

export default async function encodeJsonIntoLinkParameters(
  agent: Client,
  json: any,
) {
  try {
    let input = json;
    if (input && !isString(input)) {
      try {
        input = JSON.stringify(input);
      } catch (e) {
        console.error(e);
      }
    }
    return input ? encodeURIComponent(input) : '';
  } catch (error: any) {
    throw new Error(`encodeJsonIntoLinkParameters failed: ${error.message}`);
  }
}
