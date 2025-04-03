import installQuickChart from "../../tools/agent/installQuickChart.js";
import Client from "../../Client/index.js";
import { EnumAction } from "../../constants/index.js";
import { ActionTool } from "../../types/action.js";
import { z } from "zod";

const getInfoAction: ActionTool = {
  name: EnumAction.ENCODE_JSON_INTO_LINK_PARAMETERS,
  similes: [
    "Install Quick Chart",
  ],
  description:
    "Given install quick chart docker guides and run quick chart APIs locally.",
  examples: [
    [
      {
        input: {},
        output: {
          status: "success",
          message: "",
        },
        explanation: "Given install quick chart docker guides and run quick chart APIs locally.",
      },
    ],
  ],
  schema: z.object({}),
  handler: async (agent: Client, input: Record<string, any>) => {
    try {

      const response = await installQuickChart(agent);

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
