# Syncing with Upstream Repository

This document describes how to sync your fork with the original repository.

## Setup (One-time)

If you haven't added the upstream remote yet:

```bash
# Add the original repository as a remote named "upstream"
git remote add upstream https://github.com/bytedance/deer-flow.git
```

## Update Your Fork

```bash
# Fetch changes from the upstream repository
git fetch upstream

# Merge changes from upstream's main branch into your local main branch
git merge upstream/main

# Push the changes to your fork
git push origin main
```

You can run these commands whenever you want to incorporate the latest changes from the original repository.

# Add the Proem MCP Server

In the web client, go to "Settings" -> "MCP", click "Add Servers" and add the following snippet:

```
{
  "mcpServers": {
    "proem-mcp": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://mcp-server.proemial.workers.dev/mcp"
      ]
    }
  }
}
```

This uses the `mcp-remote` tool to make our (remote) MCP server available to the
Deerflow backend over `stdio`, as Deerflow does not yet support the streamable
HTTP transport (which is superceeding the `stdio` and `sse` transports).
