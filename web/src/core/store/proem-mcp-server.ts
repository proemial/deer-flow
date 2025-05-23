import type { MCPServerMetadata } from "../mcp";

export const proemMcpServer: MCPServerMetadata = {
  name: "proem-mcp",
  transport: "stdio",
  command: "uvx",
  args: ["mcp-proxy", "https://mcp.proem.ai/api/sse"],
  enabled: true,
  createdAt: Date.now(),
  updatedAt: Date.now(),
  tools: [
    {
      // Note:
      // These descriptions are copied from our MCP server. If you want to
      // change them, please also update the MCP server!
      name: "search-papers",
      description:
        "Search for scientific research papers matching a given search query using the Proem Index",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description:
              "The query to search for. The search uses vector similarity, so the query should contain as many keywords as possible.",
          },
        },
        required: ["query"],
        additionalProperties: false,
        $schema: "http://json-schema.org/draft-07/schema#",
      },
    },
  ],
};
