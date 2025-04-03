import getChartImgLink from "../../tools/agent/getChartImgLink.js";
import Client from "../../Client/index.js";
import { EnumAction } from "../../constants/index.js";
import { ActionTool } from "../../types/action.js";
import { z } from "zod";

const getInfoAction: ActionTool = {
  name: EnumAction.ENCODE_JSON_INTO_LINK_PARAMETERS,
  similes: [
    "Get chart image link",
    "Draw chart",
    "Chart 图片",
    "链接"
  ],
  description:
    "Using javascript encodeURIComponent function to encode JSON object into link parameters for chart image, this link parameters can use in Quick Chart API (quickchart.io).",
  examples: [
    [
      {
        input: { json: { type: 'bar', data: { labels: [2012, 2013, 2014, 2015, 2016], datasets: [{ label: 'Users', data: [120, 60, 50, 180, 120] }] } } },
        output: {
          status: "success",
          message: "%7Btype%3A'bar'%2Cdata%3A%7Blabels%3A%5B2012%2C2013%2C2014%2C2015%2C%202016%5D%2Cdatasets%3A%5B%7Blabel%3A'Users'%2Cdata%3A%5B120%2C60%2C50%2C180%2C120%5D%7D%5D%7D%7D",
        },
        explanation: "Using javascript encodeURIComponent function to encode JSON object into link parameters for chart image, this link parameters can use in Quick Chart API (quickchart.io).",
      },
    ],
  ],
  schema: z.object({
    json: z.any().describe("JSON object for quick chart api (quickchart.io) parameters"),
  }),
  handler: async (agent: Client, input: Record<string, any>) => {
    try {

      const { c } = input;

      const response = await getChartImgLink(agent, c);

      return {
        status: "success",
        message: response,
      };
    } catch (error: any) {
      // Handle specific error types
      if (error.response) {
        const { status, data } = error.response;
        if (status === 429) {
          return {
            status: "error",
            message: "Rate limit exceeded. Please try again later.",
          };
        }
        return {
          status: "error",
          message: `error: ${data.error?.message || error.message}`,
        };
      }

      return {
        status: "error",
        message: `Failed to get information: ${error.message}`,
      };
    }
  },
};

export default getInfoAction;
