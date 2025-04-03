import getChartImgLink from "../../tools/agent/getChartImgLink.js";
import Client from "../../Client/index.js";
import { EnumAction } from "../../constants/index.js";
import { ActionTool } from "../../types/action.js";
import { z } from "zod";

const getInfoAction: ActionTool = {
  name: EnumAction.GET_CHART_IMG_LINK,
  similes: [
    "Get chart image link",
    "Draw chart",
    "Chart 图片",
    "链接"
  ],
  description:
    "To draw chart and get chart image link by parameters, and parameter grammar follows Quick Chart API (quickchart.io).",
  examples: [
    [
      {
        input: { c: { type: 'bar', data: { labels: [2012, 2013, 2014, 2015, 2016], datasets: [{ label: 'Users', data: [120, 60, 50, 180, 120] }] } } },
        output: {
          status: "success",
          message: "https://quickchart.io/chart?c=%7Btype%3A'bar'%2Cdata%3A%7Blabels%3A%5B2012%2C2013%2C2014%2C2015%2C%202016%5D%2Cdatasets%3A%5B%7Blabel%3A'Users'%2Cdata%3A%5B120%2C60%2C50%2C180%2C120%5D%7D%5D%7D%7D",
        },
        explanation: "To get chart image link by parameters, and parameter grammar follows Quick Chart API (quickchart.io).",
      },
    ],
  ],
  schema: z.object({
    json: z.any().describe("quick chart api's (quickchart.io) parameters and format is JSON object. The object does not include any functions, only values."),
  }),
  handler: async (agent: Client, input: Record<string, any>) => {
    try {

      const { json } = input || {};

      const response = await getChartImgLink(agent, json);

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
