#!/usr/bin/env node

import * as dotenv from "dotenv";
import Client from "./Client/index.js";
import { startMcpServer } from "./mcp/index.js";
import { ACTIONS } from "./actions/index.js";

dotenv.config();

// Validate required environment variables
function validateEnvironment() {
  const requiredEnvVars = {};

  const missingVars = Object.entries(requiredEnvVars)
    .filter(([_, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
  }
}

async function main() {
  try {
    // Validate environment before proceeding
    validateEnvironment();

    // Initialize the agent with error handling
    const agent = Client.createClient({});

    const mcpActions = ACTIONS;

    // Start the MCP server with error handling
    await startMcpServer(mcpActions, agent, {
      name: "quick-chart-agent",
      version: "0.0.1"
    });
  } catch (error) {
    console.error('Failed to start MCP server:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}

// Handle uncaught exceptions and rejections
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});

main();