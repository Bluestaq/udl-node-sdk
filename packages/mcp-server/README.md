# Unifieddatalibrary TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export UDL_ACCESS_TOKEN="My Access Token"
export UDL_AUTH_PASSWORD="My Password"
export UDL_AUTH_USERNAME="My Username"
npx -y unified-data-library-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "unified_data_library_api": {
      "command": "npx",
      "args": ["-y", "unified-data-library-mcp"],
      "env": {
        "UDL_ACCESS_TOKEN": "My Access Token",
        "UDL_AUTH_PASSWORD": "My Password",
        "UDL_AUTH_USERNAME": "My Username"
      }
    }
  }
}
```

### Cursor

If you use Cursor, you can install the MCP server by using the button below. You will need to set your environment variables
in Cursor's `mcp.json`, which can be found in Cursor Settings > Tools & MCP > New MCP Server.

[![Add to Cursor](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=unified-data-library-mcp&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsInVuaWZpZWQtZGF0YS1saWJyYXJ5LW1jcCJdLCJlbnYiOnsiVURMX0FDQ0VTU19UT0tFTiI6IlNldCB5b3VyIFVETF9BQ0NFU1NfVE9LRU4gaGVyZS4iLCJVRExfQVVUSF9QQVNTV09SRCI6IlNldCB5b3VyIFVETF9BVVRIX1BBU1NXT1JEIGhlcmUuIiwiVURMX0FVVEhfVVNFUk5BTUUiOiJTZXQgeW91ciBVRExfQVVUSF9VU0VSTkFNRSBoZXJlLiJ9fQ)

### VS Code

If you use MCP, you can install the MCP server by clicking the link below. You will need to set your environment variables
in VS Code's `mcp.json`, which can be found via Command Palette > MCP: Open User Configuration.

[Open VS Code](https://vscode.stainless.com/mcp/%7B%22name%22%3A%22unified-data-library-mcp%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22unified-data-library-mcp%22%5D%2C%22env%22%3A%7B%22UDL_ACCESS_TOKEN%22%3A%22Set%20your%20UDL_ACCESS_TOKEN%20here.%22%2C%22UDL_AUTH_PASSWORD%22%3A%22Set%20your%20UDL_AUTH_PASSWORD%20here.%22%2C%22UDL_AUTH_USERNAME%22%3A%22Set%20your%20UDL_AUTH_USERNAME%20here.%22%7D%7D)

### Claude Code

If you use Claude Code, you can install the MCP server by running the command below in your terminal. You will need to set your
environment variables in Claude Code's `.claude.json`, which can be found in your home directory.

```
claude mcp add --transport stdio unified_data_library_api --env UDL_ACCESS_TOKEN="Your UDL_ACCESS_TOKEN here." UDL_AUTH_PASSWORD="Your UDL_AUTH_PASSWORD here." UDL_AUTH_USERNAME="Your UDL_AUTH_USERNAME here." -- npx -y unified-data-library-mcp
```

## Code Mode

This MCP server is built on the "Code Mode" tool scheme. In this MCP Server,
your agent will write code against the TypeScript SDK, which will then be executed in an
isolated sandbox. To accomplish this, the server will expose two tools to your agent:

- The first tool is a docs search tool, which can be used to generically query for
  documentation about your API/SDK.

- The second tool is a code tool, where the agent can write code against the TypeScript SDK.
  The code will be executed in a sandbox environment without web or filesystem access. Then,
  anything the code returns or prints will be returned to the agent as the result of the
  tool call.

Using this scheme, agents are capable of performing very complex tasks deterministically
and repeatably.

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Basic or Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| --------------------- | ------------------------ | --------------- |
| `x-udl-auth-username` | `username` | BasicAuth |
| `x-udl-auth-password` | `password` | BasicAuth |
| `x-udl-access-token` | `accessToken` | BearerAuth |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "unified_data_library_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Basic <auth value>"
      }
    }
  }
}
```
