import Client from "../Client/index.js";
import { z } from "zod";

/**
 * Example of an action with input and output
 */
export interface ActionExample {
  input: Record<string, any>;
  output: Record<string, any>;
  explanation: string;
}

/**
 * Handler function type for executing the action
 */
export type Handler = (
  agent: Client,
  input: Record<string, any>,
) => Promise<Record<string, any>>;

export interface DwInputSchema {
  type: string;
  description?: string;
  items?: DwInputSchema[];
  properties?: { [name: string]: DwInputSchema };
}

/**
 * Cline 的市集应用在 Tool 上包了一个 Action，做进一步扩展
 * Main Action interface inspired by ELIZA
 * This interface makes it easier to implement actions across different frameworks
 */
export interface ActionTool {
  /**
   * Unique name of the action
   */
  name: string;

  /**
   * Detailed description of what the action does
   */
  description?: string;

  /**
   * 直接写好 schema。
   * https://modelcontextprotocol.io/docs/concepts/tools
   */
  inputSchema?: DwInputSchema;

  // --------------- 以下为扩展 -----------------

  /**
   * Alternative names/phrases that can trigger this action
   */
  similes?: string[];

  /**
   * Array of example inputs and outputs for the action
   * Each inner array represents a group of related examples
   */
  examples?: ActionExample[][];

  /**
   * Zod schema for input validation
   */
  schema?: z.ZodType<any>;

  /**
   * Function that executes the action
   */
  handler?: Handler;
}
