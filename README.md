# Quick Chart MCP Server
[![smithery badge](https://smithery.ai/badge/@datafe/quick-chart-mcp)](https://smithery.ai/server/@datafe/quick-chart-mcp)

A Model Context Protocol (MCP) server that provides chart tools, allowing it to interact with the [quick chart](https://github.com/typpo/quickchart) through a standardized interface. This implementation is based on the chart definition and enables users can open quick chart pages seamlessly.

## Overview

This MCP server tools:

* Interact with Quick Chart

The server implements the Model Context Protocol specification to standardize chart interactions for AI agents.

## Prerequisites

* Node.js (v16 or higher)
* pnpm (recommended), npm, or yarn

## Installation

### Installing via Smithery

To install quick-chart-mcp for Claude Desktop automatically via [Smithery](https://smithery.ai/server/@datafe/quick-chart-mcp):

```bash
npx -y @smithery/cli install @datafe/quick-chart-mcp --client claude
```

### Option 1: Install from npm (recommend for clients like Cursor/Cline)

```bash
# Install globally
npm install -g quick-chart-mcp

# Or install locally in your project
npm install quick-chart-mcp
```

### Option 2: Build from Source (for developers)

1. Clone this repository:
```bash
git clone https://github.com/datafe/quick-chart-mcp
cd quick-chart-mcp
```

2. Install dependencies (pnpm is recommended, npm is supported):
```bash
pnpm install
```

3. Build the project:
```bash
pnpm run build
```

4. Development the project (by @modelcontextprotocol/inspector):
```bash
pnpm run dev
```
open http://localhost:5173

## Configuration

### MCP Configs

``` json
{
  "mcpServers": {
    "quick-chart-mcp": {
      "autoApprove": [],
      "disabled": false,
      "timeout": 300,
      "command": "npx",
      "args": [
        "quick-chart-mcp@1.0.13"
      ],
      "transportType": "stdio"
    }
  }
}
```

### Environment Setup

Create a `.env` file with your credentials:

```env
# Quick Chart Configuration
NODE_ENV=optional_development_or_product
QUICK_CHART_DRAW_URL=optional_quick_chart_draw_url
NEED_INSTALL_QUICK_CHART=optional_true_or_false
```

## Project Structure

```
quick-chart-mcp/
├── src/
│   ├── index.ts          # Main entry point
├── package.json
└── tsconfig.json
```

## Available Tools

The MCP server provides the following Quick Chart tools:

* `GetChartImgLink` - Retrieve chart image link by parameters.
* `InstallQuickChart` - Install quick chart service locally.

## Security Considerations

* Use environment variables for sensitive information
* Regularly monitor and audit AI agent activities

## Troubleshooting

If you encounter issues:

1. Verify the build was successful

## Dependencies

image APIs.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
