# Unifieddatalibrary TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export UDL_AUTH_PASSWORD="My Password"
export UDL_AUTH_USERNAME="My Username"
export UDL_ACCESS_TOKEN="My Access Token"
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
      "args": ["-y", "unified-data-library-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "UDL_AUTH_PASSWORD": "My Password",
        "UDL_AUTH_USERNAME": "My Username",
        "UDL_ACCESS_TOKEN": "My Access Token"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "unified-data-library-mcp/server";

// import a specific tool
import createAirEvents from "unified-data-library-mcp/tools/air-events/create-air-events";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createAirEvents, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `air_events`:

- `create_air_events` (`write`): Service operation to take a single airevent object as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_air_events` (`write`): Service operation to update a single airevent record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_air_events` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_air_events` (`write`): Service operation to delete an airevent record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_air_events` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_air_events` (`write`): Service operation intended for initial integration only, to take a list ofService operation intended for initial integration only, to take a list of airevent records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_air_events` (`read`): Service operation to get a single airevent record by its unique ID passed as a path parameter.
- `queryhelp_air_events` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_air_events` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_air_events` (`write`): Service operation to take multiple airevent records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `air_operations.air_tasking_orders`:

- `create_air_operations_air_tasking_orders` (`write`): Service operation to take a single airtaskingorder record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_air_operations_air_tasking_orders` (`read`): Service operation to get a single airtaskingorder record by its unique ID passed as a path parameter.
- `list_air_operations_air_tasking_orders` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_air_operations_air_tasking_orders` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_help_air_operations_air_tasking_orders` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_air_operations_air_tasking_orders` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_air_operations_air_tasking_orders` (`write`): Service operation to take multiple airtaskingorder records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `air_operations.aircraft_sorties`:

- `create_air_operations_aircraft_sorties` (`write`): Service operation to take a single AircraftSortie as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_air_operations_aircraft_sorties` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_air_operations_aircraft_sorties` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_air_operations_aircraft_sorties` (`write`): Service operation intended for initial integration only, to take a list of AircraftSorties as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `history_aodr_air_operations_aircraft_sorties` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `history_count_air_operations_aircraft_sorties` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `history_query_air_operations_aircraft_sorties` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `unvalidated_publish_air_operations_aircraft_sorties` (`write`): Service operation to take one or many aircraft sortie records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `air_operations.airspace_control_orders`:

- `unvalidated_publish_air_operations_airspace_control_orders` (`write`): Service operation to take multiple AirspaceControlOrder records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `air_operations.crewpapers`:

- `unpublish_air_operations_crewpapers` (`write`): Service operation to remove supporting PDF from an aircraft sortie or sorties. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `upload_pdf_air_operations_crewpapers` (`write`): Service operation to upload a supporting PDF for the aircraft sortie. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `air_operations.diplomatic_clearance`:

- `unvalidated_publish_air_operations_diplomatic_clearance` (`write`): Service operation to take multiple Diplomatic Clearance records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `air_transport_missions`:

- `create_air_transport_missions` (`write`): Service operation to take a single AirTransportMission object as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_air_transport_missions` (`read`): Service operation to get a single Air Transport Mission record by its unique ID passed as a path parameter.
- `update_air_transport_missions` (`write`): Service operation to update a single AirTransportMission record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_air_transport_missions` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_air_transport_missions` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_air_transport_missions` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_air_transport_missions` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `air_transport_missions.history`:

- `list_air_transport_missions_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_air_transport_missions_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_air_transport_missions_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `aircraft`:

- `create_aircraft` (`write`): Service operation to take a single Aircraft as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_aircraft` (`read`): Service operation to get a single Aircraft record by its unique ID passed as a path parameter.
- `update_aircraft` (`write`): Service operation to update a single Aircraft. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_aircraft` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_aircraft` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_aircraft` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_query_aircraft` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `aircraft_sorties`:

- `retrieve_aircraft_sorties` (`read`): Service operation to get a single AircraftSortie record by its unique ID passed as a path parameter.
- `update_aircraft_sorties` (`write`): Service operation to update a single AircraftSortie. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `queryhelp_aircraft_sorties` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_aircraft_sorties` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `aircraft_status_remarks`:

- `create_aircraft_status_remarks` (`write`): Service operation to take a single Aircraft Status Remark record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_aircraft_status_remarks` (`read`): Service operation to get a single Aircraft Status Remark record by its unique ID passed as a path parameter.
- `update_aircraft_status_remarks` (`write`): Service operation to update a single Aircraft Status Remark record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_aircraft_status_remarks` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_aircraft_status_remarks` (`write`): Service operation to delete a single Aircraft Status Remark record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_aircraft_status_remarks` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_aircraft_status_remarks` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_aircraft_status_remarks` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `aircraft_statuses`:

- `create_aircraft_statuses` (`write`): Service operation to take a single AircraftStatus as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_aircraft_statuses` (`read`): Service operation to get a single AircraftStatus record by its unique ID passed as a path parameter.
- `update_aircraft_statuses` (`write`): Service operation to update a single AircraftStatus. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_aircraft_statuses` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_aircraft_statuses` (`write`): Service operation to delete a Status object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_aircraft_statuses` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_aircraft_statuses` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_aircraft_statuses` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `aircraft_statuses.history`:

- `list_aircraft_statuses_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_aircraft_statuses_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `airfield_slots`:

- `create_airfield_slots` (`write`): Service operation to take a single airfieldslot record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_airfield_slots` (`read`): Service operation to get a single airfieldslot record by its unique ID passed as a path parameter.
- `update_airfield_slots` (`write`): Service operation to update a single airfieldslot record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_airfield_slots` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_airfield_slots` (`write`): Service operation to delete an airfieldslot record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_airfield_slots` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_airfield_slots` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_airfield_slots` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `airfield_status`:

- `create_airfield_status` (`write`): Service operation to take a single airfield status record as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `retrieve_airfield_status` (`read`): Service operation to get a single airfield status record by its unique ID passed as a path parameter.
- `update_airfield_status` (`write`): Service operation to update a single airfield status record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_airfield_status` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_airfield_status` (`write`): Service operation to delete a Status object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_airfield_status` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_airfield_status` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_airfield_status` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `airfield_status.history`:

- `list_airfield_status_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_airfield_status_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `airfields`:

- `create_airfields` (`write`): Service operation to take a single Airfield as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `retrieve_airfields` (`read`): Service operation to get a single Airfield by its unique ID passed as a path parameter.
- `update_airfields` (`write`): Service operation to update a single Airfield. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_airfields` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_airfields` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_airfields` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_airfields` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `airfield_slot_consumptions`:

- `create_airfield_slot_consumptions` (`write`): Service operation to take a single airfieldslotconsumption record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_airfield_slot_consumptions` (`read`): Service operation to get a single airfieldslotconsumption record by its unique ID passed as a path parameter.
- `update_airfield_slot_consumptions` (`write`): Service operation to update a single AirfieldSlotConsumption. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_airfield_slot_consumptions` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_airfield_slot_consumptions` (`write`): Service operation to delete an airfieldslotconsumption record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_airfield_slot_consumptions` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_airfield_slot_consumptions` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_airfield_slot_consumptions` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `airload_plans`:

- `create_airload_plans` (`write`): Service operation to take a single airloadplan record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_airload_plans` (`read`): Service operation to get a single airloadplan record by its unique ID passed as a path parameter.
- `update_airload_plans` (`write`): Service operation to update a single airloadplan record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_airload_plans` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_airload_plans` (`write`): Service operation to delete a airloadplan record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_airload_plans` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_airload_plans` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_airload_plans` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `airspace_control_orders`:

- `create_airspace_control_orders` (`write`): Service operation to take a single AirspaceControlOrder record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_airspace_control_orders` (`read`): Service operation to get a single AirspaceControlOrder record by its unique ID passed as a path parameter.
- `list_airspace_control_orders` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_airspace_control_orders` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_airspace_control_orders` (`write`): Service operation intended for initial integration only, to take a list of AirspaceControlOrder records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_help_airspace_control_orders` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_airspace_control_orders` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `ais`:

- `list_ais` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_ais` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_ais` (`write`): Service operation intended for initial integration only, to take a list of AIS records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `history_count_ais` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_ais` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_ais` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `ais.history`:

- `list_ais_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_ais_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `ais_objects`:

- `unvalidated_publish_ais_objects` (`write`): Service operation to take multiple AIS objects as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `analytic_imagery`:

- `retrieve_analytic_imagery` (`read`): Service operation to get a single AnalyticImagery record by its unique ID passed as a path parameter. AnalyticImagery represents metadata about an image, as well as the actual binary image data.
- `list_analytic_imagery` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_analytic_imagery` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `file_get_analytic_imagery` (`read`): Service operation to get a single AnalyticImagery binary image by its unique ID passed as a path parameter. The image is returned as an attachment Content-Disposition.
- `history_analytic_imagery` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `history_aodr_analytic_imagery` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `history_count_analytic_imagery` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_analytic_imagery` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_analytic_imagery` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_analytic_imagery` (`write`): Upload a new image with its metadata.

  The request body requires a zip file containing exactly two files:\
  1\) A file with the `.json` file extension whose content conforms to the `AnalyticImagery_Ingest` schema.\
  2\) A binary image file of the allowed types for this service.

  The JSON and image files will be associated with each other via the `id` field. Query the metadata via `GET /udl/analyticimagery` and use `GET /udl/analyticimagery/getFile/{id}` to retrieve the binary image file.

  This operation only accepts application/zip media. The application/json request body is documented to provide a convenient reference to the ingest schema.

  This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `antennas`:

- `create_antennas` (`write`): Service operation to take a single Antenna as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_antennas` (`read`): Service operation to get a single Antenna record by its unique ID passed as a path parameter.
- `update_antennas` (`write`): Service operation to update a single Antenna. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_antennas` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_antennas` (`write`): Service operation to delete a Antenna object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_antennas` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_antennas` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_antennas` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `attitude_data`:

- `query_help_attitude_data` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_attitude_data` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `attitude_sets`:

- `create_attitude_sets` (`write`): Service operation intended for initial integration only. Takes a single AttitudeSet as a POST body and ingest into the database. This operation does not persist any Onorbit Attitude points that may be present in the body of the request. This operation is not intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
  </br>
  The following rules apply to this operation:
  <h3>
   * Attitude Set numPoints value must correspond exactly to the number of Onorbit Attitude states associated with that Attitude Set.  The numPoints value is checked against the actual posted number of states and mismatch will result in the post being rejected.
   * Attitude Set startTime and endTime must correspond to the earliest and latest state times, respectively, of the associated Onorbit Attitude states.
   * Either satNo, idOnOrbit, or origObjectId must be provided.  The preferred option is to post with satNo for a cataloged object with (only) origObjectId for an unknown, uncatalogued, or internal/test object.  There are several cases for the logic associated with these fields:
     + If satNo is provided and correlates to a known UDL sat number then the idOnOrbit will be populated appropriately in addition to the satNo.
     + If satNo is provided and does not correlate to a known UDL sat number then the provided satNo value will be moved to the origObjectId field and satNo left null.
     + If origObjectId and a valid satNo or idOnOrbit are provided then both the satNo/idOnOrbit and origObjectId will maintain the provided values.
     + If only origObjectId is provided then origObjectId will be populated with the posted value.  In this case, no checks are made against existing UDL sat numbers.
  </h3>
- `retrieve_attitude_sets` (`read`): Service operation to get a single AttitudeSet record by its unique ID passed as a path parameter.
- `list_attitude_sets` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_attitude_sets` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_help_attitude_sets` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_attitude_sets` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_attitude_sets` (`write`): Service operation to take a single Attitude Set and many associated Onorbit Attitude records as a POST body for ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
  </br>
  The following rules apply to this operation:
  <h3>
    * Attitude Set numPoints value must correspond exactly to the number of Onorbit Attitude states associated with that Attitude Set. The numPoints value is checked against the actual posted number of states and mismatch will result in the post being rejected.
    * Attitude Set startTime and endTime must correspond to the earliest and latest state times, respectively, of the associated Onorbit Attitude states.
    * Either satNo, idOnOrbit, or origObjectId must be provided. The preferred option is to post with satNo for a cataloged object, and with (only) origObjectId for an unknown, uncatalogued, or internal/test object.  There are several cases for the logic associated with these fields:
      + If satNo is provided and correlates to a known UDL sat number then the idOnOrbit will be populated appropriately in addition to the satNo.
      + If satNo is provided and does not correlate to a known UDL sat number then the provided satNo value will be moved to the origObjectId field and satNo left null.
      + If origObjectId and a valid satNo or idOnOrbit are provided then both the satNo/idOnOrbit and origObjectId will maintain the provided values.
      + If only origObjectId is provided then origObjectId will be populated with the posted value.  In this case, no checks are made against existing UDL sat numbers.
  </h3>

### Resource `attitude_sets.history`:

- `list_attitude_sets_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_attitude_sets_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_attitude_sets_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `batteries`:

- `create_batteries` (`write`): Service operation to take a single Battery as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_batteries` (`read`): Service operation to get a single Battery record by its unique ID passed as a path parameter.
- `update_batteries` (`write`): Service operation to update a single Battery. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_batteries` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_batteries` (`write`): Service operation to delete a Battery object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_batteries` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_batteries` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_batteries` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `batterydetails`:

- `create_batterydetails` (`write`): Service operation to take a single BatteryDetails as a POST body and ingest into the database. A Battery record may have multiple details records from several sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_batterydetails` (`read`): Service operation to get a single BatteryDetails record by its unique ID passed as a path parameter. A Battery record may have multiple details records from several sources.
- `update_batterydetails` (`write`): Service operation to update a single BatteryDetails. A Battery record may have multiple details records from several sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_batterydetails` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_batterydetails` (`write`): Service operation to delete a BatteryDetails object specified by the passed ID path parameter. A Battery record may have multiple details records from several sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `beam`:

- `create_beam` (`write`): Service operation to take a single Beam as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_beam` (`read`): Service operation to get a single Beam record by its unique ID passed as a path parameter.
- `update_beam` (`write`): Service operation to update a single Beam. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_beam` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_beam` (`write`): Service operation to delete a Beam object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_beam` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_help_beam` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_beam` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `beam_contours`:

- `create_beam_contours` (`write`): Service operation to take a single BeamContour as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_beam_contours` (`read`): Service operation to get a single BeamContour by its unique ID passed as a path parameter.
- `update_beam_contours` (`write`): Service operation to update a single BeamContour. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_beam_contours` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_beam_contours` (`write`): Service operation to delete a BeamContour object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_beam_contours` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_beam_contours` (`write`): Service operation to take a list of BeamContours as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_help_beam_contours` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_beam_contours` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `buses`:

- `create_buses` (`write`): Service operation to take a single Bus as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_buses` (`read`): Service operation to get a single Bus record by its unique ID passed as a path parameter.
- `update_buses` (`write`): Service operation to update a single Bus. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_buses` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_buses` (`write`): Service operation to delete a Bus object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_buses` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_help_buses` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_buses` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `channels`:

- `create_channels` (`write`): Service operation to take a single Channel as a POST body and ingest into the database. A Comm payload may have multiple transponders and a transponder may have many channels. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_channels` (`read`): Service operation to get a single Channel record by its unique ID passed as a path parameter. A Comm payload may have multiple transponders and a transponder may have many channels.
- `update_channels` (`write`): Service operation to update a single Channel. A Comm payload may have multiple transponders and a transponder may have many channels. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_channels` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_channels` (`write`): Service operation to delete a Channel object specified by the passed ID path parameter. A Comm payload may have multiple transponders and a transponder may have many channels. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_channels` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_channels` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_channels` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `collect_requests`:

- `create_collect_requests` (`write`): Service operation to take a single CollectRequest as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_collect_requests` (`read`): Service operation to get a single CollectRequest by its unique ID passed as a path parameter.
- `list_collect_requests` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_collect_requests` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_collect_requests` (`write`): Service operation intended for initial integration only, to take a list of CollectRequest as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_help_collect_requests` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_collect_requests` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_collect_requests` (`write`): Service operation to take a list of CollectRequest as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `collect_requests.history`:

- `list_collect_requests_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_collect_requests_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_collect_requests_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `collect_responses`:

- `create_collect_responses` (`write`): Service operation to take a single Collect Response object as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_collect_responses` (`read`): Service operation to get a single Collect Response record by its unique ID passed as a path parameter.
- `list_collect_responses` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_collect_responses` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_collect_responses` (`write`): Service operation intended for initial integration only, to take a list of Collect Response objects as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_help_collect_responses` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `unvalidated_publish_collect_responses` (`write`): Service operation to take a list of CollectResponse as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `collect_responses.history`:

- `list_collect_responses_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_collect_responses_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `collect_responses.history.aodr`:

- `list_history_collect_responses_aodr` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `collect_responses.tuple`:

- `list_collect_responses_tuple` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `comm`:

- `create_comm` (`write`): Service operation to take a single Comm as a POST body and ingest into the database. A Comm is an on-orbit communications payload, including supporting data such as transponders and channels, etc. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_comm` (`read`): Service operation to get a single Comm record by its unique ID passed as a path parameter. A Comm is an on-orbit communications payload, including supporting data such as transponders and channels, etc.
- `update_comm` (`write`): Service operation to update a single Comm. A Comm is an on-orbit communications payload, including supporting data such as transponders and channels, etc. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_comm` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_comm` (`write`): Service operation to delete a Comm object specified by the passed ID path parameter. A Comm is an on-orbit communications payload, including supporting data such as transponders and channels, etc. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_comm` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_comm` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_comm` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `conjunctions`:

- `retrieve_conjunctions` (`read`): Service operation to get a single conjunction by its unique ID passed as a path parameter.
- `list_conjunctions` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_conjunctions` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_udl_conjunctions` (`write`): Service operation to take a single Conjunction as a POST body and ingest into the database. A Conjunction is analysis of probability of collision; the data can include state vectors for primary and secondary satellites. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `create_bulk_conjunctions` (`write`): Service operation intended for initial integration only, to take a list of Conjunctions as a POST body and ingest into the database. A Conjunction is analysis of probability of collision; the data can include state vectors for primary and secondary satellites. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_history_conjunctions` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_conjunctions` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_conjunctions` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_conjunctions` (`write`): Service operation to take a list of Conjunctions as a POST body and ingest into the database. A Conjunction is analysis of probability of collision; the data can include state vectors for primary and secondary satellites. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `upload_conjunction_data_message_conjunctions` (`write`): Service to accept multiple CDMs in as zip file or a single CDM as payload. The service converts key-value pair formatted CDMs to UDL formats and stores them. The CDM format is as described in https://ccsds.org document CCSDS 508.0-B-1. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

  **Example:** /filedrop/cdms?filename=conj.zip&classification=U&dataMode=TEST&source=Bluestaq&tags=tag1,tag2

### Resource `conjunctions.history`:

- `aodr_conjunctions_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_conjunctions_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `cots`:

- `create_cots` (`write`): This service enables posting CoT messages to the UDL TAK server. CoT data will be persisted in the UDL POI schema as well as federated to connected TAK servers.

### Resource `aviation_risk_management`:

- `create_aviation_risk_management` (`write`): Service operation to take a single Aviation Risk Management record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_aviation_risk_management` (`read`): Service operation to get a single Aviation Risk Management record by its unique ID passed as a path parameter.
- `update_aviation_risk_management` (`write`): Service operation to update a single Aviation Risk Management record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `delete_aviation_risk_management` (`write`): Service operation to delete an Aviation Risk Management record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_aviation_risk_management` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_aviation_risk_management` (`write`): Service operation intended for initial integration only, to take a list of Aviation Risk Management records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_aviation_risk_management` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_help_aviation_risk_management` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_aviation_risk_management` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_aviation_risk_management` (`write`): Service operation to take multiple Aviation Risk Management records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `dropzone`:

- `create_dropzone` (`write`): Service operation to take a single dropzone record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_dropzone` (`read`): Service operation to get a single dropzone record by its unique ID passed as a path parameter.
- `update_dropzone` (`write`): Service operation to update a single dropzone record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `delete_dropzone` (`write`): Service operation to delete a dropzone record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_dropzone` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_dropzone` (`write`): Service operation intended for initial integration only, to take a list of dropzone records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_dropzone` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_help_dropzone` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_dropzone` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_dropzone` (`write`): Service operation to take multiple dropzone records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `emitter_geolocation`:

- `create_emitter_geolocation` (`write`): Service operation to take a single RF geolocation as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `retrieve_emitter_geolocation` (`read`): Service operation to get a single RF geolocation by its unique ID passed as a path parameter.
- `delete_emitter_geolocation` (`write`): Service operation to delete a RF geolocation specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance. Note, delete operations do not remove data from historical or publish/subscribe stores.
- `count_emitter_geolocation` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_emitter_geolocation` (`write`): Service operation intended for initial integration only, to take a list of RF geolocations as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_emitter_geolocation` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_help_emitter_geolocation` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_emitter_geolocation` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_emitter_geolocation` (`write`): Service operation to take multiple emittergeolocation records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `feature_assessment`:

- `create_feature_assessment` (`write`): Service operation to take a single FeatureAssessment record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_feature_assessment` (`read`): Service operation to get a single FeatureAssessment record by its unique ID passed as a path parameter.
- `count_feature_assessment` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_feature_assessment` (`write`): Service operation intended for initial integration only, to take a list of FeatureAssessment records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_feature_assessment` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_help_feature_assessment` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_feature_assessment` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_feature_assessment` (`write`): Service operation to take multiple FeatureAssessment records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `feature_assessment.history`:

- `count_feature_assessment_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_feature_assessment_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `write_aodr_feature_assessment_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `global_atmospheric_model`:

- `retrieve_global_atmospheric_model` (`read`): Service operation to get a single GlobalAtmosphericModel record by its unique ID passed as a path parameter.
- `count_global_atmospheric_model` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_file_global_atmospheric_model` (`read`): Service operation to get a single GlobalAtmosphericModel compressed data file by its unique ID passed as a path parameter. The compressed data file is returned as an attachment Content-Disposition.
- `query_global_atmospheric_model` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_help_global_atmospheric_model` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_global_atmospheric_model` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_global_atmospheric_model` (`write`): Upload a file with its metadata.

  The request body requires a zip file containing exactly two files:\
  1\) A file with the `.json` file extension whose content conforms to the `GlobalAtmosphericModel_Ingest` schema.\
  2\) A file with the `.geojson` file extension.

  The JSON and GEOJSON files will be associated with each other other via the `id` field. Query the metadata via `GET /udl/globalatmosphericmodel` and use `GET /udl/globalatmosphericmodel/getFile/{id}` to retrieve the compressed GEOJSON file as `.gz` extension.

  This operation only accepts application/zip media. The application/json request body is documented to provide a convenient reference to the ingest schema.

  This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `global_atmospheric_model.history`:

- `count_global_atmospheric_model_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_global_atmospheric_model_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `write_aodr_global_atmospheric_model_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `route_stats`:

- `create_route_stats` (`write`): Service operation to take a single routeStats record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_route_stats` (`read`): Service operation to get a single routeStats record by its unique ID passed as a path parameter.
- `update_route_stats` (`write`): Service operation to update a single RouteStats. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `delete_route_stats` (`write`): Service operation to delete a routeStats record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_route_stats` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_route_stats` (`write`): Service operation intended for initial integration only, to take a list of RouteStats as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_route_stats` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_help_route_stats` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_route_stats` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_route_stats` (`write`): Service operation to take multiple routestats records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `countries`:

- `create_countries` (`write`): Service operation to take a single Country as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_countries` (`read`): Service operation to get a single Country record by its unique code passed as a path parameter.
- `update_countries` (`write`): Service operation to update a single Country. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_countries` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_countries` (`write`): Service operation to delete a Country object specified by the passed code path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_countries` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_countries` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_countries` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `crew`:

- `create_crew` (`write`): Service operation to take a single Crew object as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_crew` (`read`): Service operation to get a single Crew record by its unique ID passed as a path parameter.
- `update_crew` (`write`): Service operation to update a single Crew record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_crew` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_crew` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_crew` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_crew` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_crew` (`write`): Service operation to take multiple Crew objects as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `diff_of_arrival`:

- `retrieve_diff_of_arrival` (`read`): Service operation to get a single TDOA/FDOA record by its unique ID passed as a path parameter.
- `queryhelp_diff_of_arrival` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_diff_of_arrival` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_diff_of_arrival` (`write`): Service operation to take multiple TDOA/FDOA records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `diff_of_arrival.history`:

- `count_diff_of_arrival_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `diplomatic_clearance`:

- `create_diplomatic_clearance` (`write`): Service operation to take a single diplomatic clearance record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_diplomatic_clearance` (`read`): Service operation to get a single diplomatic clearance record by its unique ID passed as a path parameter.
- `update_diplomatic_clearance` (`write`): Service operation to update a single diplomatic clearance record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_diplomatic_clearance` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_diplomatic_clearance` (`write`): Service operation to delete a diplomatic clearance record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_diplomatic_clearance` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_diplomatic_clearance` (`write`): Service operation intended for initial integration only, to take a list of diplomaticclearance records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `queryhelp_diplomatic_clearance` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_diplomatic_clearance` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `diplomatic_clearance.history`:

- `list_diplomatic_clearance_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_diplomatic_clearance_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_diplomatic_clearance_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `diplomatic_clearance.country`:

- `create_diplomatic_clearance_country` (`write`): Service operation to take a single diplomaticclearancecountry record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_diplomatic_clearance_country` (`read`): Service operation to get a single diplomaticclearancecountry record by its unique ID passed as a path parameter.
- `update_diplomatic_clearance_country` (`write`): Service operation to update a single diplomaticclearancecountry record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_diplomatic_clearance_country` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_diplomatic_clearance_country` (`write`): Service operation to delete a diplomaticclearancecountry record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_diplomatic_clearance_country` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_diplomatic_clearance_country` (`write`): Service operation intended for initial integration only, to take a list of diplomaticclearancecountry records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_help_diplomatic_clearance_country` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_diplomatic_clearance_country` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_diplomatic_clearance_country` (`write`): Service operation to take multiple diplomaticclearancecountry records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `drift_history`:

- `retrieve_drift_history` (`read`): Service operation to get a single DriftHistory record by its unique ID passed as a path parameter. DriftHistory represents historical drift rates for GEO Onorbit objects resulting from updates to OnorbitDetails driftRate values.
- `list_drift_history` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_drift_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_drift_history` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_drift_history` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `ecp_sdr`:

- `unvalidated_publish_ecp_sdr` (`write`): Service operation to take multiple ECPSDR as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `effect_requests`:

- `create_effect_requests` (`write`): Service operation to take a single EffectRequest as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `retrieve_effect_requests` (`read`): Service operation to get a single EffectRequest by its unique ID passed as a path parameter.
- `list_effect_requests` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_effect_requests` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_effect_requests` (`write`): Service operation intended for initial integration only, to take a list of EffectRequest records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_help_effect_requests` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_effect_requests` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_effect_requests` (`write`): Service operation to take multiple EffectRequests as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `effect_requests.history`:

- `list_effect_requests_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_effect_requests_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_effect_requests_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `effect_responses`:

- `create_effect_responses` (`write`): Service operation to take a single EffectResponse as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `retrieve_effect_responses` (`read`): Service operation to get a single EffectResponse by its unique ID passed as a path parameter.
- `list_effect_responses` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_effect_responses` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_effect_responses` (`write`): Service operation intended for initial integration only, to take a list of EffectResponse records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_help_effect_responses` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_effect_responses` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_effect_responses` (`write`): Service operation to take multiple EffectResponses as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `effect_responses.history`:

- `list_effect_responses_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_effect_responses_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_effect_responses_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `elsets`:

- `create_elsets` (`write`): Service operation to take a single elset as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `retrieve_elsets` (`read`): Service operation to get a single elset by its unique ID passed as a path parameter.
- `list_elsets` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_elsets` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_elsets` (`write`): Service operation intended for initial integration only, to take a list of elsets as a POST body and ingest into the database with or without dupe detection. Default is no dupe checking. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `create_bulk_from_tle_elsets` (`write`): Service operation to take a multiple TLEs as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_current_elset_help_elsets` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `queryhelp_elsets` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_elsets` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_elsets` (`write`): Service operation to take elsets as a POST body and ingest into the database with or without dupe detection. Default is no dupe checking. This operation is intended to be used for automated feeds into UDL.

### Resource `elsets.current`:

- `list_elsets_current` (`read`): Service operation to dynamically query/filter current elsets within the system by a variety of query parameters not specified in this API documentation. A current elset is the currently active, latest elset for an on-orbit object. Current elsets are tracked by source and a source should be provided as a query parameter to this service operation to view the 'current' catalog for a particular provider. If source is not provided, it will be defaulted to '18th SPCS'. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on additional query parameter information.
- `tuple_elsets_current` (`read`): Service operation to dynamically query/filter current elsets within the system by a variety of query parameters not specified in this API documentation. A current elset is the currently active, latest elset for an on-orbit object. Current elsets are tracked by source and a source should be provided as a query parameter to this service operation to view the 'current' catalog for a particular provider. If source is not provided, it will be defaulted to '18th SPCS'. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on additional query parameter information.

### Resource `elsets.history`:

- `list_elsets_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_elsets_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_elsets_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `engine_details`:

- `create_engine_details` (`write`): Service operation to take a single EngineDetails as a POST body and ingest into the database. EngineDetails are launch vehicle engine details and performance characteristics/limits compiled by a particular source. A launch vehicle engine may have several details records from multiple sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_engine_details` (`read`): Service operation to get a single EngineDetails record by its unique ID passed as a path parameter. EngineDetails are launch vehicle engine details and performance characteristics/limits compiled by a particular source. A launch vehicle engine may have several details records from multiple sources.
- `update_engine_details` (`write`): Service operation to update a single EngineDetails. EngineDetails are launch vehicle engine details and performance characteristics/limits compiled by a particular source. A launch vehicle engine may have several details records from multiple sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_engine_details` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_engine_details` (`write`): Service operation to delete a EngineDetails object specified by the passed ID path parameter. EngineDetails are launch vehicle engine details and performance characteristics/limits compiled by a particular source. A launch vehicle engine may have several details records from multiple sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `engines`:

- `create_engines` (`write`): Service operation to take a single Engine as a POST body and ingest into the database. An Engine represents launch engine/booster information to include performance characteristics and limits. A launch vehicle has 1 to many engines per stage. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_engines` (`read`): Service operation to get a single Engine record by its unique ID passed as a path parameter. An Engine represents launch engine/booster information to include performance characteristics and limits. A launch vehicle has 1 to many engines per stage.
- `update_engines` (`write`): Service operation to update a single Engine. An Engine represents launch engine/booster information to include performance characteristics and limits. A launch vehicle has 1 to many engines per stage. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_engines` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_engines` (`write`): Service operation to delete a Engine object specified by the passed ID path parameter. An Engine represents launch engine/booster information to include performance characteristics and limits. A launch vehicle has 1 to many engines per stage. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_engines` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_engines` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_engines` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `entities`:

- `create_entities` (`write`): Service operation to take a single Entity as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_entities` (`read`): Service operation to get a single Entity record by its unique ID passed as a path parameter.
- `update_entities` (`write`): Service operation to update a single Entity. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_entities` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_entities` (`write`): Service operation to delete an Entity object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_entities` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_all_types_entities` (`read`): Retrieves all distinct entity types.
- `query_help_entities` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_entities` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `eop`:

- `create_eop` (`write`): Service operation to take a single EOP Record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_eop` (`read`): Service operation to get a single EOP record by its unique ID passed as a path parameter.
- `update_eop` (`write`): Service operation to update a single EOP Record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_eop` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_eop` (`write`): Service operation to delete an EOP Record specified by the passed ID path parameter. Note, delete operations do not remove data from historical or publish/subscribe stores. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_eop` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `list_tuple_eop` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `queryhelp_eop` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.

### Resource `eop.history`:

- `list_eop_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_eop_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_eop_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `ephemeris`:

- `list_ephemeris` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_ephemeris` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `file_upload_ephemeris` (`write`): Service operation to post/store Ephemeris data. This operation is intended to be used for automated feeds into UDL. The payload is in Ephemeris format as described by the "Flight Safety Handbook" published by 18th Space Command. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

  </br>
  **Example:** /filedrop/ephem?classification=U&dataMode=TEST&source=Bluestaq&satNo=25544&ephemFormatType=NASA&hasMnvr=false&type=ROUTINE&category=EXTERNAL&origin=NASA&tags=tag1,tag2

- `queryhelp_ephemeris` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_ephemeris` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_ephemeris` (`write`): Service operation to take a single EphemerisSet and many associated Ephemeris records as a POST body for ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
  </br>
  The following rules apply to this operation:
  <h3>
    * Ephemeris Set numPoints value must correspond exactly to the number of Ephemeris states associated with that Ephemeris Set.  The numPoints value is checked against the actual posted number of states and mismatch will result in the post being rejected.
    * Ephemeris Set pointStartTime and pointEndTime must correspond to the earliest and latest state times, respectively, of the associated Ephemeris states.
    * Either satNo, idOnOrbit, or origObjectId must be provided.  The preferred option is to post with satNo for a cataloged object, and with (only) origObjectId for an unknown, uncatalogued, or internal/test object.  There are several cases for the logic associated with these fields:
      + If satNo is provided and correlates to a known UDL sat number then the idOnOrbit will be populated appropriately in addition to the satNo.
      + If satNo is provided and does not correlate to a known UDL sat number then the provided satNo value will be moved to the origObjectId field and satNo left null.
      + If origObjectId and a valid satNo or idOnOrbit are provided then both the satNo/idOnOrbit and origObjectId will maintain the provided values.
      + If only origObjectId is provided then origObjectId will be populated with the posted value.  In this case, no checks are made against existing UDL sat numbers.
  </h3>

### Resource `ephemeris.attitude_data`:

- `list_ephemeris_attitude_data` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_ephemeris_attitude_data` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `ephemeris.attitude_data.history`:

- `retrieve_attitude_data_ephemeris_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_attitude_data_ephemeris_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_attitude_data_ephemeris_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `ephemeris.history`:

- `list_ephemeris_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_ephemeris_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_ephemeris_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `ephemeris_sets`:

- `create_ephemeris_sets` (`write`): Service operation intended for initial integration only. Takes a single EphemerisSet as a POST body and ingest into the database. This operation does not persist any Ephemeris Points that may be present in the body of the request. This operation is not intended to be used for automated feeds into UDL.A specific role is required to perform this service operation. Please contact the UDL team for assistance.
  </br>
  The following rules apply to this operation:
  <h3>
   * Ephemeris Set numPoints value must correspond exactly to the number of Ephemeris states associated with that Ephemeris Set.  The numPoints value is checked against the actual posted number of states and mismatch will result in the post being rejected.
   * Ephemeris Set pointStartTime and pointEndTime must correspond to the earliest and latest state times, respectively, of the associated Ephemeris states.
   * Either satNo, idOnOrbit, or origObjectId must be provided.  The preferred option is to post with satNo for a cataloged object, and with (only) origObjectId for an unknown, uncatalogued, or internal/test object.  There are several cases for the logic associated with these fields:
     + If satNo is provided and correlates to a known UDL sat number then the idOnOrbit will be populated appropriately in addition to the satNo.
     + If satNo is provided and does not correlate to a known UDL sat number then the provided satNo value will be moved to the origObjectId field and satNo left null.
     + If origObjectId and a valid satNo or idOnOrbit are provided then both the satNo/idOnOrbit and origObjectId will maintain the provided values.
     + If only origObjectId is provided then origObjectId will be populated with the posted value.  In this case, no checks are made against existing UDL sat numbers.
  </h3>
- `retrieve_ephemeris_sets` (`read`): Service operation to get a single Ephemeris Set by its unique ID passed as a path parameter.
- `list_ephemeris_sets` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_ephemeris_sets` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `file_retrieve_ephemeris_sets` (`read`): Service operation to get the original raw flat file, if any, associated with the EphemerisSet. The file is returned as an attachment Content-Disposition.
- `queryhelp_ephemeris_sets` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_ephemeris_sets` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `ephemeris_sets.history`:

- `list_ephemeris_sets_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_ephemeris_sets_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_ephemeris_sets_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `equipment`:

- `create_equipment` (`write`): Service operation to take a single equipment record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_equipment` (`read`): Service operation to get a single equipment record by its unique ID passed as a path parameter.
- `update_equipment` (`write`): Service operation to update a single equipment record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_equipment` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_equipment` (`write`): Service operation to delete a equipment record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_equipment` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_equipment` (`write`): Service operation intended for initial integration only, to take a list of Equipment records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_help_equipment` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_equipment` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `equipment_remarks`:

- `create_equipment_remarks` (`write`): Service operation to take a single equipmentremark record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_equipment_remarks` (`read`): Service operation to get a single equipmentremark record by its unique ID passed as a path parameter.
- `list_equipment_remarks` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_equipment_remarks` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_equipment_remarks` (`write`): Service operation intended for initial integration only, to take a list of equipmentremark records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_help_equipment_remarks` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_equipment_remarks` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `evac`:

- `create_evac` (`write`): Service operation to take a single evac as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_evac` (`read`): Service operation to get a single Evac by its unique ID passed as a path parameter.
- `list_evac` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_evac` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_evac` (`write`): Service operation intended for initial integration only, to take a list of Evac records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_help_evac` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `unvalidated_publish_evac` (`write`): Service operation to take a list of Evac events as a POST body and ingest into the database. Requires a specific role, please contact the UDL team to gain access. This operation is intended to be used for automated feeds into UDL.

### Resource `evac.history`:

- `list_evac_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_evac_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `evac.tuple`:

- `list_evac_tuple` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `event_evolution`:

- `create_event_evolution` (`write`): Service operation to take a single EventEvolution object as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_event_evolution` (`read`): Service operation to get a single EventEvolution by its unique ID passed as a path parameter.
- `list_event_evolution` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_event_evolution` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_event_evolution` (`write`): Service operation intended for initial integration only, to take a list of EventEvolution records as a POST body and ingest into the database. Requires specific roles, please contact the UDL team to gain access. This operation is not intended to be used for automated feeds into UDL...data providers should contact the UDL team for instructions on setting up a permanent feed through an alternate mechanism.
- `queryhelp_event_evolution` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_event_evolution` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_event_evolution` (`write`): Service operation to take a list of EventEvolution records as a POST body and ingest into the database. Requires a specific role, please contact the UDL team to gain access. This operation is intended to be used for automated feeds into UDL.

### Resource `event_evolution.history`:

- `list_event_evolution_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_event_evolution_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_event_evolution_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `flightplan`:

- `create_flightplan` (`write`): Service operation to take a single FlightPlan object as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_flightplan` (`read`): Service operation to get a single FlightPlan record by its unique ID passed as a path parameter.
- `update_flightplan` (`write`): Service operation to update a single flightplan record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_flightplan` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_flightplan` (`write`): Service operation to delete a flight plan record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_flightplan` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_flightplan` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_flightplan` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_flightplan` (`write`): Service operation to take one or many flight plan records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `geo_status`:

- `create_geo_status` (`write`): Service operation to take a single GEOStatus record as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `list_geo_status` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_geo_status` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_geo_status` (`write`): Service operation intended for initial integration only, to take a list of GEOStatus records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_geo_status` (`read`): Service operation to get a single GEOStatus record by its unique ID passed as a path parameter.
- `queryhelp_geo_status` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_geo_status` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `geo_status.history`:

- `list_geo_status_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_geo_status_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_geo_status_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `gnss_observationset`:

- `list_gnss_observationset` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_gnss_observationset` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_gnss_observationset` (`write`): Service operation intended for initial integration only, to take a list of Track Details records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `queryhelp_gnss_observationset` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_gnss_observationset` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_gnss_observationset` (`write`): Service operation to accept one or more GNSSObservationSet(s) and associated GNSS Observation(s) as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `gnss_observationset.history`:

- `list_gnss_observationset_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_gnss_observationset_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `ground_imagery`:

- `create_ground_imagery` (`write`): Service operation to take a single GroundImagery object as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_ground_imagery` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_ground_imagery` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_ground_imagery` (`read`): Service operation to get a single GroundImagery record by its unique ID passed as a path parameter. GroundImagery represents metadata about a ground image, as well as the actual binary image data.
- `get_file_ground_imagery` (`read`): Service operation to get a single GroundImagery binary image by its unique ID passed as a path parameter. The image is returned as an attachment Content-Disposition.
- `history_aodr_ground_imagery` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_ground_imagery` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_ground_imagery` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `upload_zip_ground_imagery` (`write`): Upload a new image with its metadata.

  The request body requires a zip file containing exactly two files:\
  1\) A file with the `.json` file extension whose content conforms to the `GroundImagery_Ingest` schema.
  2\) A binary image file of the allowed types for this service.

  The JSON and image files will be associated with each other via the `id` field. Query the metadata via `GET /udl/groundimagery` and use `GET /udl/groundimagery/getFile/{id}` to retrieve the binary image file.

  This operation only accepts application/zip media. The application/json request body is documented to provide a convenient reference to the ingest schema.

  This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `ground_imagery.history`:

- `count_ground_imagery_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_ground_imagery_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `h3_geo`:

- `create_h3_geo` (`write`): Service operation to take a single H3Geo record as a POST body and ingest into the database. This operation does not persist any H3GeoHexCell points that may be present in the body of the request. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `list_h3_geo` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_h3_geo` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_h3_geo` (`read`): Service operation to get a single RF geolocation by its unique ID passed as a path parameter.
- `queryhelp_h3_geo` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_h3_geo` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `h3_geo.history`:

- `ador_h3_geo_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_h3_geo_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_h3_geo_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `h3_geo_hex_cell`:

- `list_h3_geo_hex_cell` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_h3_geo_hex_cell` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_h3_geo_hex_cell` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_h3_geo_hex_cell` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `hazard`:

- `create_hazard` (`write`): Service operation to take a single hazard as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `list_hazard` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_hazard` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_hazard` (`write`): Service operation intended for initial integration only, to take a list of hazards as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_hazard` (`read`): Service operation to get a single Hazard by its unique ID passed as a path parameter.
- `queryhelp_hazard` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_hazard` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `hazard.history`:

- `aodr_hazard_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_hazard_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_hazard_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `ir`:

- `create_ir` (`write`): Service operation to take a single IR as a POST body and ingest into the database. An IR is an on-orbit infrared payload. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_ir` (`write`): Service operation to update a single IR. An IR is an on-orbit infrared payload. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_ir` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_ir` (`write`): Service operation to delete a IR object specified by the passed ID path parameter. An IR is an on-orbit infrared payload. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_ir` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_ir` (`read`): Service operation to get a single IR record by its unique ID passed as a path parameter. An IR is an on-orbit infrared payload.
- `queryhelp_ir` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_ir` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `isr_collections`:

- `list_isr_collections` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_isr_collections` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_isr_collections` (`write`): Service operation intended for initial integration only, to take a list of ISRCollection records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `queryhelp_isr_collections` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_isr_collections` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_isr_collections` (`write`): Service operation to take multiple ISR Collections as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `isr_collections.history`:

- `list_isr_collections_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_isr_collections_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_isr_collections_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `item`:

- `create_item` (`write`): Service operation to take a single item record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_item` (`write`): Service operation to update a single Item. An Item can be cargo, equipment, or a passenger. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_item` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_item` (`write`): Service operation to delete a item record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_item` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_item` (`read`): Service operation to get a single item record by its unique ID passed as a path parameter.
- `queryhelp_item` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_item` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_item` (`write`): Service operation to take multiple item records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `item_trackings`:

- `create_item_trackings` (`write`): Service operation to take a single itemtracking record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_item_trackings` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_item_trackings` (`write`): Service operation to delete an item tracking object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_item_trackings` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_item_trackings` (`read`): Service operation to get a single item tracking record by its unique ID passed as a path parameter.
- `queryhelp_item_trackings` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_item_trackings` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_item_trackings` (`write`): Service operation to take multiple itemtracking records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `item_trackings.history`:

- `list_item_trackings_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_item_trackings_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `launch_detection`:

- `create_launch_detection` (`write`): Service operation to take a single launch detection as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_launch_detection` (`write`): Service operation to update a single launch detection. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_launch_detection` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_launch_detection` (`write`): Service operation to delete a launch detection object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_launch_detection` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_launch_detection` (`read`): Service operation to get a single launch detection record by its unique ID passed as a path parameter.
- `queryhelp_launch_detection` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_launch_detection` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `launch_event`:

- `create_launch_event` (`write`): Service operation to take a single LaunchEvent as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_launch_event` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_launch_event` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_launch_event` (`write`): Service operation intended for initial integration only, to take a list of LaunchEvent as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_launch_event` (`read`): Service operation to get a single LaunchEvent record by its unique ID passed as a path parameter.
- `queryhelp_launch_event` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_launch_event` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_launch_event` (`write`): Service operation to take LaunchEvent entries as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `launch_event.history`:

- `list_launch_event_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_launch_event_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_launch_event_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `launch_site`:

- `create_launch_site` (`write`): Service operation to take a single launch site as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_launch_site` (`write`): Service operation to update a launch. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_launch_site` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_launch_site` (`write`): Service operation to delete a launch site specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_launch_site` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_launch_site` (`read`): Service operation to get a single launch site by its unique ID passed as a path parameter.
- `queryhelp_launch_site` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_launch_site` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `launch_site_details`:

- `create_launch_site_details` (`write`): Service operation to take a single LaunchSiteDetails as a POST body and ingest into the database. A LaunchSiteDetails represents details compiled/collected on a launch site by a particular source. A launch site may have several details records. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_launch_site_details` (`write`): Service operation to update a LaunchSiteDetails. A LaunchSiteDetails represents details compiled/collected on a launch site by a particular source. A launch site may have several details records. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_launch_site_details` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_launch_site_details` (`write`): Service operation to delete a LaunchSiteDetails specified by the passed ID path parameter. A LaunchSiteDetails represents details compiled/collected on a launch site by a particular source. A launch site may have several details records. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `find_by_source_launch_site_details` (`read`): Service operation to get a single LaunchSiteDetails by a source passed as a query parameter. A LaunchSiteDetails represents details compiled/collected on a launch site by a particular source. A launch site may have several details records.
- `get_launch_site_details` (`read`): Service operation to get a single LaunchSiteDetails by its unique ID passed as a path parameter. A LaunchSiteDetails represents details compiled/collected on a launch site by a particular source. A launch site may have several details records.

### Resource `launch_vehicle`:

- `create_launch_vehicle` (`write`): Service operation to take a single LaunchVehicle as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_launch_vehicle` (`write`): Service operation to update a single LaunchVehicle. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_launch_vehicle` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_launch_vehicle` (`write`): Service operation to delete a LaunchVehicle object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_launch_vehicle` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_launch_vehicle` (`read`): Service operation to get a single LaunchVehicle record by its unique ID passed as a path parameter.
- `queryhelp_launch_vehicle` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_launch_vehicle` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `launch_vehicle_details`:

- `create_launch_vehicle_details` (`write`): Service operation to take a single LaunchVehicleDetails as a POST body and ingest into the database. LaunchVehicleDetails represents launch vehicle details and characteristics, compiled by a particular source. A vehicle may have multiple details records from various sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_launch_vehicle_details` (`write`): Service operation to update a single LaunchVehicleDetails. LaunchVehicleDetails represents launch vehicle details and characteristics, compiled by a particular source. A vehicle may have multiple details records from various sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_launch_vehicle_details` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_launch_vehicle_details` (`write`): Service operation to delete a LaunchVehicleDetails object specified by the passed ID path parameter. LaunchVehicleDetails represents launch vehicle details and characteristics, compiled by a particular source. A vehicle may have multiple details records from various sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `get_launch_vehicle_details` (`read`): Service operation to get a single LaunchVehicleDetails record by its unique ID passed as a path parameter. LaunchVehicleDetails represents launch vehicle details and characteristics, compiled by a particular source. A vehicle may have multiple details records from various sources.

### Resource `link_status`:

- `create_link_status` (`write`): Service operation to take a single LinkStatus as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_link_status` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_link_status` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_link_status` (`read`): Service operation to get a single LinkStatus record by its unique ID passed as a path parameter.
- `queryhelp_link_status` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_link_status` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `link_status.datalink`:

- `create_link_status_datalink` (`write`): Service operation to take a single DataLink record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_link_status_datalink` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_link_status_datalink` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `queryhelp_link_status_datalink` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_link_status_datalink` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_link_status_datalink` (`write`): Service operation to take multiple datalink records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `link_status.history`:

- `list_link_status_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_link_status_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_link_status_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `location`:

- `create_location` (`write`): Service operation to take a single location as a POST body and ingest into the database. Locations are specific fixed points on the earth and are used to denote the locations of fixed sensors, operating units, etc. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_location` (`write`): Service operation to update a single location. Locations are specific fixed points on the earth and are used to denote the locations of fixed sensors, operating units, etc. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_location` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_location` (`write`): Service operation to delete a location object specified by the passed ID path parameter. Locations are specific fixed points on the earth and are used to denote the locations of fixed sensors, operating units, etc. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_location` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_location` (`read`): Service operation to get a single location record by its unique ID passed as a path parameter. Locations are specific fixed points on the earth and are used to denote the locations of fixed sensors, operating units, etc.
- `queryhelp_location` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_location` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `logistics_support`:

- `create_logistics_support` (`write`): Service operation to take a single LogisticsSupport record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_logistics_support` (`write`): Service operation to update a single LogisticsSupport record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_logistics_support` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_logistics_support` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_logistics_support` (`write`): Service operation intended for initial integration only, to take a list of LogisticsSupport records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_logistics_support` (`read`): Service operation to get a single LogisticsSupport record by its unique ID passed as a path parameter.
- `queryhelp_logistics_support` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_logistics_support` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_logistics_support` (`write`): Service operation to take multiple logisticssupport records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `logistics_support.history`:

- `list_logistics_support_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_logistics_support_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_logistics_support_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `maneuvers`:

- `create_maneuvers` (`write`): Service operation to take a single maneuver as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `list_maneuvers` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_maneuvers` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_maneuvers` (`write`): Service operation intended for initial integration only, to take a list of maneuvers as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_maneuvers` (`read`): Service operation to get a single maneuver by its unique ID passed as a path parameter.
- `queryhelp_maneuvers` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_maneuvers` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_maneuvers` (`write`): Service operation to take multiple maneuvers as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `maneuvers.history`:

- `list_maneuvers_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_maneuvers_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_maneuvers_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `manifold`:

- `create_manifold` (`write`): Service operation to take a single Manifold as a POST body and ingest into the database. A manifold represents a set of possible/theoretical orbits for an object of interest based on a delta V and delta T. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_manifold` (`write`): Service operation to update a single Manifold. A manifold represents a set of possible/theoretical orbits for an object of interest based on a delta V and delta T. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_manifold` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_manifold` (`write`): Service operation to delete a Manifold object specified by the passed ID path parameter. A manifold represents a set of possible/theoretical orbits for an object of interest based on a delta V and delta T. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_manifold` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_manifold` (`write`): Service operation to take multiple Manifolds as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `get_manifold` (`read`): Service operation to get a single Manifold record by its unique ID passed as a path parameter. A manifold represents a set of possible/theoretical orbits for an object of interest based on a delta V and delta T.
- `queryhelp_manifold` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_manifold` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `manifoldelset`:

- `create_manifoldelset` (`write`): Service operation to take a single ManifoldElset as a POST body and ingest into the database. A ManifoldElset represents theoretical Keplarian orbital elements belonging to an object of interest's manifold describing a possible/theoretical orbit for an object of interest for tasking purposes. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_manifoldelset` (`write`): Service operation to update a single ManifoldElset. A ManifoldElset represents theoretical Keplarian orbital elements belonging to an object of interest's manifold describing a possible/theoretical orbit for an object of interest for tasking purposes. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_manifoldelset` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_manifoldelset` (`write`): Service operation to delete a ManifoldElset object specified by the passed ID path parameter. A ManifoldElset represents theoretical Keplarian orbital elements belonging to an object of interest's manifold describing a possible/theoretical orbit for an object of interest for tasking purposes. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_manifoldelset` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_manifoldelset` (`write`): Service operation to take multiple ManifoldElsets as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `get_manifoldelset` (`read`): Service operation to get a single ManifoldElset record by its unique ID passed as a path parameter. A ManifoldElset represents theoretical Keplarian orbital elements belonging to an object of interest's manifold describing a possible/theoretical orbit for an object of interest for tasking purposes.
- `queryhelp_manifoldelset` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_manifoldelset` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `missile_tracks`:

- `list_missile_tracks` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_missile_tracks` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_missile_tracks` (`write`): Service operation intended for initial integration only, to take a list of MissileTrack records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `queryhelp_missile_tracks` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_missile_tracks` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_missile_tracks` (`write`): Service operation to take multiple missile track records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `missile_tracks.history`:

- `aodr_missile_tracks_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_missile_tracks_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_missile_tracks_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `mission_assignment`:

- `create_mission_assignment` (`write`): Service operation to take a single MissionAssignment as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_mission_assignment` (`write`): Service operation to update a single MissionAssignment. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_mission_assignment` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_mission_assignment` (`write`): Service operation to delete a MissionAssignment object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_mission_assignment` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_mission_assignment` (`write`): Service operation to take multiple MissionAssignments as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `get_mission_assignment` (`read`): Service operation to get a single MissionAssignment record by its unique ID passed as a path parameter.
- `queryhelp_mission_assignment` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_mission_assignment` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `mission_assignment.history`:

- `aodr_mission_assignment_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_mission_assignment_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_mission_assignment_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `mti`:

- `list_mti` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_mti` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_mti` (`write`): Service operation intended for initial integration only, to take a list of Moving Target Indicator (MTI) records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `queryhelp_mti` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_mti` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_mti` (`write`): Service operation to take a list of Moving Target Indicator (MTI) formatted data as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `mti.history`:

- `list_mti_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_mti_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_mti_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `navigation`:

- `create_navigation` (`write`): Service operation to take a single Navigation as a POST body and ingest into the database. A Navigation is an on-orbit navigation payload. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_navigation` (`write`): Service operation to update a single Navigation. An Navigation is an on-orbit navigation payload. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_navigation` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_navigation` (`write`): Service operation to delete a Navigation object specified by the passed ID path parameter. An Navigation is an on-orbit navigation payload. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_navigation` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_navigation` (`read`): Service operation to get a single Navigation record by its unique ID passed as a path parameter. An Navigation is an on-orbit navigation payload.
- `queryhelp_navigation` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_navigation` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `navigational_obstruction`:

- `create_navigational_obstruction` (`write`): Service operation to take a single navigational obstruction record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_navigational_obstruction` (`write`): Service operation to update a single navigational obstruction record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_navigational_obstruction` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_navigational_obstruction` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_navigational_obstruction` (`write`): Service operation intended for initial integration only, to take a list of navigational obstruction records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_navigational_obstruction` (`read`): Service operation to get a single navigational obstruction record by its unique ID passed as a path parameter.
- `queryhelp_navigational_obstruction` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_navigational_obstruction` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `notification`:

- `create_notification` (`write`): Service operation to push a generic Notification/Alert JSON message into the UDL. This operation accepts a UDL-formatted Notification JSON notification/alert message. See the Notification schema for required fields such as classificationMarking, msgType, etc. Messages pushed through this service may be pulled via Secure Messaging and historical REST services. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_notification` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_notification` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_raw_notification` (`write`): Service operation to push a Notification/Alert message into the UDL. This operation uses query parameters to pass UDL-required fields such as classificationMarking, msgType, etc and takes a raw string payload which can be XML, JSON, or plain text. The preferred mechanism for posting notifications is to use the standard POST which takes the proper UDL JSON Notification schema as this service may convert the message in an undesirable manner. The service will wrap the passed payload with the appropriate UDL JSON schema, using escape characters as necessary for the payload to produce a valid JSON document. XML payloads (not recommended) are automatically converted to JSON. Messages pushed through this service may be pulled via Secure Messaging and historical REST services. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `get_notification` (`read`): Service operation to get a single notification by its unique ID passed as a path parameter.
- `queryhelp_notification` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_notification` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `notification.history`:

- `list_notification_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_notification_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_notification_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `object_of_interest`:

- `create_object_of_interest` (`write`): Service operation to take a single ObjectOfInterest as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_object_of_interest` (`write`): Service operation to update a single ObjectOfInterest. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_object_of_interest` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_object_of_interest` (`write`): Service operation to delete a ObjectOfInterest object specified by the passed ID path parameter. A ObjectOfInterest is an on-orbit ObjectOfInterestunications payload, including supporting data such as transponders and channels, etc. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_object_of_interest` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_object_of_interest` (`read`): Service operation to get a single ObjectOfInterest record by its unique ID passed as a path parameter.
- `queryhelp_object_of_interest` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_object_of_interest` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `observations.ecpsdr`:

- `create_observations_ecpsdr` (`write`): Service operation to take a single ECPSDR as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_observations_ecpsdr` (`read`): Service operation to get a single ECPSDR by its unique ID passed as a path parameter.
- `list_observations_ecpsdr` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_observations_ecpsdr` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_observations_ecpsdr` (`write`): Service operation intended for initial integration only, to take a list of ECPSDR as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_help_observations_ecpsdr` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_observations_ecpsdr` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `observations.monoradar`:

- `list_observations_monoradar` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_observations_monoradar` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_observations_monoradar` (`write`): Service operation intended for initial integration only, to take a list of MonoRadar records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `queryhelp_observations_monoradar` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_observations_monoradar` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_observations_monoradar` (`write`): Service operation to take a list of MonoRadar records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `observations.monoradar.history`:

- `aodr_monoradar_observations_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_monoradar_observations_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_monoradar_observations_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `observations.swir`:

- `unvalidated_publish_observations_swir` (`write`): Service operation to take a list of SWIR records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `observations.radarobservation`:

- `create_observations_radarobservation` (`write`): Service operation to take a single radar observation as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `list_observations_radarobservation` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_observations_radarobservation` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_observations_radarobservation` (`write`): Service operation intended for initial integration only, to take a list of radar observations as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_observations_radarobservation` (`read`): Service operation to get a single radar observations by its unique ID passed as a path parameter.
- `queryhelp_observations_radarobservation` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_observations_radarobservation` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_observations_radarobservation` (`write`): Service operation to take multiple radar observations as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `observations.radarobservation.history`:

- `list_radarobservation_observations_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_radarobservation_observations_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_radarobservation_observations_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `observations.rf_observation`:

- `create_observations_rf_observation` (`write`): Service operation to take a single RF observation as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `list_observations_rf_observation` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_observations_rf_observation` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_observations_rf_observation` (`write`): Service operation intended for initial integration only, to take a list of RF observations as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_observations_rf_observation` (`read`): Service operation to get a single RF observation by its unique ID passed as a path parameter.
- `queryhelp_observations_rf_observation` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_observations_rf_observation` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_observations_rf_observation` (`write`): Service operation to take multiple RF observations as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `observations.rf_observation.history`:

- `list_rf_observation_observations_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_rf_observation_observations_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_rf_observation_observations_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `observations.passive_radar_observation`:

- `create_observations_passive_radar_observation` (`write`): Service operation to take a single PassiveRadarObservation as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_observations_passive_radar_observation` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_observations_passive_radar_observation` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_observations_passive_radar_observation` (`write`): Service operation intended for initial integration only, to take a list of PassiveRadarObservation records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `file_create_observations_passive_radar_observation` (`write`): Service operation to take multiple PassiveRadarObservation records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `get_observations_passive_radar_observation` (`read`): Service operation to get a single PassiveRadarObservation record by its unique ID passed as a path parameter.
- `queryhelp_observations_passive_radar_observation` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_observations_passive_radar_observation` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `observations.passive_radar_observation.history`:

- `list_passive_radar_observation_observations_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_passive_radar_observation_observations_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_passive_radar_observation_observations_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `observations.eo_observations`:

- `create_observations_eo_observations` (`write`): Service operation to take a single EO observation as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `retrieve_observations_eo_observations` (`read`): Service operation to get a single EO observation by its unique ID passed as a path parameter.
- `list_observations_eo_observations` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_observations_eo_observations` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_observations_eo_observations` (`write`): Service operation intended for initial integration only, to take a list of EO observations as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `queryhelp_observations_eo_observations` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_observations_eo_observations` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_observations_eo_observations` (`write`): Service operation to take multiple EO observations as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `observations.eo_observations.history`:

- `list_eo_observations_observations_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_eo_observations_observations_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_eo_observations_observations_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `onboardnavigation`:

- `list_onboardnavigation` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_onboardnavigation` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_onboardnavigation` (`write`): Service operation intended for initial integration only, to take a list of OnboardNavigation records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `queryhelp_onboardnavigation` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_onboardnavigation` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_onboardnavigation` (`write`): Service operation to take a list of onboard navigation records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `onboardnavigation.history`:

- `list_onboardnavigation_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_onboardnavigation_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_onboardnavigation_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `onorbit`:

- `create_onorbit` (`write`): Service operation to take a single onorbit object as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_onorbit` (`write`): Service operation to update a single OnOrbit object. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_onorbit` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_onorbit` (`write`): Service operation to delete an OnOrbit object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_onorbit` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_onorbit` (`read`): Service operation to get a single OnOrbit object by its unique ID passed as a path parameter.
- `get_signature_onorbit` (`read`): This service queries common information across Radar, EO, and RF observations.
- `queryhelp_onorbit` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_onorbit` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `onorbit.antenna_details`:

- `create_onorbit_antenna_details` (`write`): Service operation to take a single AntennaDetails as a POST body and ingest into the database. An antenna may have multiple details records compiled by various sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_onorbit_antenna_details` (`read`): Service operation to get a single AntennaDetails record by its unique ID passed as a path parameter. An antenna may have multiple details records compiled by various sources.
- `update_onorbit_antenna_details` (`write`): Service operation to update a single AntennaDetails. An antenna may have multiple details records compiled by various sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_onorbit_antenna_details` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_onorbit_antenna_details` (`write`): Service operation to delete a AntennaDetails object specified by the passed ID path parameter. An antenna may have multiple details records compiled by various sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `onorbitantenna`:

- `create_onorbitantenna` (`write`): Service operation to take a single OnorbitAntenna as a POST body and ingest into the database. An OnorbitAntenna is the association between on-orbit spacecraft antennas and a particular on-orbit spacecraft. An antenna type may be associated with many different on-orbit spacecraft. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_onorbitantenna` (`write`): Service operation to update a single OnorbitAntenna. An OnorbitAntenna is the association between on-orbit spacecraft antennas and a particular on-orbit spacecraft. An antenna type may be associated with many different on-orbit spacecraft. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_onorbitantenna` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_onorbitantenna` (`write`): Service operation to delete a OnorbitAntenna object specified by the passed ID path parameter. An OnorbitAntenna is the association between on-orbit spacecraft antennas and a particular on-orbit spacecraft. An antenna type may be associated with many different on-orbit spacecraft. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `get_onorbitantenna` (`read`): Service operation to get a single OnorbitAntenna record by its unique ID passed as a path parameter. An OnorbitAntenna is the association between on-orbit spacecraft antennas and a particular on-orbit spacecraft. An antenna type may be associated with many different on-orbit spacecraft.

### Resource `onorbitbattery`:

- `create_onorbitbattery` (`write`): Service operation to take a single OnorbitBattery as a POST body and ingest into the database. OnorbitBattery is the association between on-orbit spacecraft batteries and a particular on-orbit spacecraft. A Battery may be associated with many different on-orbit spacecraft. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_onorbitbattery` (`write`): Service operation to update a single OnorbitBattery. OnorbitBattery is the association between on-orbit spacecraft batteries and a particular on-orbit spacecraft. A Battery may be associated with many different on-orbit spacecraft. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_onorbitbattery` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_onorbitbattery` (`write`): Service operation to delete a OnorbitBattery object specified by the passed ID path parameter. OnorbitBattery is the association between on-orbit spacecraft batteries and a particular on-orbit spacecraft. A Battery may be associated with many different on-orbit spacecraft. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `get_onorbitbattery` (`read`): Service operation to get a single OnorbitBattery record by its unique ID passed as a path parameter. OnorbitBattery is the association between on-orbit spacecraft batteries and a particular on-orbit spacecraft. A Battery may be associated with many different on-orbit spacecraft.

### Resource `onorbitdetails`:

- `create_onorbitdetails` (`write`): Service operation to take a single OnorbitDetails as a POST body and ingest into the database. An OnorbitDetails is a collection of additional characteristics on an on-orbit object. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_onorbitdetails` (`write`): Service operation to update a single OnorbitDetails. An OnorbitDetails is a collection of additional characteristics on an on-orbit object. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_onorbitdetails` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_onorbitdetails` (`write`): Service operation to delete a OnorbitDetails object specified by the passed ID path parameter. An OnorbitDetails is a collection of additional characteristics on an on-orbit object. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `get_onorbitdetails` (`read`): Service operation to get a single OnorbitDetails record by its unique ID passed as a path parameter. An OnorbitDetails is a collection of additional characteristics on an on-orbit object.

### Resource `onorbitevent`:

- `create_onorbitevent` (`write`): Service operation to take a single OnorbitEvent as a POST body and ingest into the database. An OnorbitEvent is an event associated with a particular on-orbit spacecraft including insurance related losses, anomalies and incidents. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_onorbitevent` (`write`): Service operation to update a single OnorbitEvent. An OnorbitEvent is an event associated with a particular on-orbit spacecraft including insurance related losses, anomalies and incidents. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_onorbitevent` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_onorbitevent` (`write`): Service operation to delete a OnorbitEvent object specified by the passed ID path parameter. An OnorbitEvent is an event associated with a particular on-orbit spacecraft including insurance related losses, anomalies and incidents. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_onorbitevent` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_onorbitevent` (`read`): Service operation to get a single OnorbitEvent record by its unique ID passed as a path parameter. An OnorbitEvent is an event associated with a particular on-orbit spacecraft including insurance related losses, anomalies and incidents.
- `queryhelp_onorbitevent` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_onorbitevent` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `onorbitlist`:

- `create_onorbitlist` (`write`): Service operation to take a single OnorbitList as a POST body and ingest into the database. An OnorbitList is just a generic named list of on-orbit IDs. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_onorbitlist` (`write`): Service operation to update a single OnorbitList. An OnorbitList is just a generic named list of on-orbit IDs. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_onorbitlist` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_onorbitlist` (`write`): Service operation to delete a OnorbitList object specified by the passed ID path parameter. An OnorbitList is just a generic named list of on-orbit IDs. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_onorbitlist` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_onorbitlist` (`read`): Service operation to get a single OnorbitList record by its unique ID passed as a path parameter. An OnorbitList is just a generic named list of on-orbit IDs.
- `queryhelp_onorbitlist` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_onorbitlist` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `onorbitsolararray`:

- `create_onorbitsolararray` (`write`): Service operation to take a single OnorbitSolarArray as a POST body and ingest into the database. An OnorbitSolarArray is the association between on-orbit spacecraft SolarArrays and a particular on-orbit spacecraft. A SolarArray type may be associated with many different on-orbit spacecraft. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_onorbitsolararray` (`write`): Service operation to update a single OnorbitSolarArray. An OnorbitSolarArray is the association between on-orbit spacecraft SolarArrays and a particular on-orbit spacecraft. A SolarArray type may be associated with many different on-orbit spacecraft. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_onorbitsolararray` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_onorbitsolararray` (`write`): Service operation to delete a OnorbitSolarArray object specified by the passed ID path parameter. An OnorbitSolarArray is the association between on-orbit spacecraft SolarArrays and a particular on-orbit spacecraft. A SolarArray type may be associated with many different on-orbit spacecraft. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `get_onorbitsolararray` (`read`): Service operation to get a single OnorbitSolarArray record by its unique ID passed as a path parameter. An OnorbitSolarArray is the association between on-orbit spacecraft SolarArrays and a particular on-orbit spacecraft. A SolarArray type may be associated with many different on-orbit spacecraft.

### Resource `onorbitthruster`:

- `create_onorbitthruster` (`write`): Service operation to take a single OnorbitThruster as a POST body and ingest into the database. An OnorbitThruster is the association between an on-orbit spacecraft's engine and a particular on-orbit spacecraft. An Engine type may be associated with many different on-orbit spacecraft. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_onorbitthruster` (`write`): Service operation to update a single OnorbitThruster. An OnorbitThruster is the association between an on-orbit spacecraft's engine and a particular on-orbit spacecraft. An Engine type may be associated with many different on-orbit spacecraft. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_onorbitthruster` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_onorbitthruster` (`write`): Service operation to delete a OnorbitThruster object specified by the passed ID path parameter. An OnorbitThruster is the association between an on-orbit spacecraft's engine and a particular on-orbit spacecraft. An Engine type may be associated with many different on-orbit spacecraft. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `get_onorbitthruster` (`read`): Service operation to get a single OnorbitThruster record by its unique ID passed as a path parameter. An OnorbitThruster is the association between an on-orbit spacecraft's engine and a particular on-orbit spacecraft. An Engine type may be associated with many different on-orbit spacecraft.

### Resource `onorbitthrusterstatus`:

- `create_onorbitthrusterstatus` (`write`): Service operation to take a single OnorbitThrusterStatus record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_onorbitthrusterstatus` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_onorbitthrusterstatus` (`write`): Service operation to delete a OnorbitThrusterStatus record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_onorbitthrusterstatus` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_onorbitthrusterstatus` (`write`): Service operation intended for initial integration only, to take a list of onorbitthrusterstatus records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_onorbitthrusterstatus` (`read`): Service operation to get a single OnorbitThrusterStatus record by its unique ID passed as a path parameter. OnorbitThrusterStatus records are information for OnorbitThruster objects.
- `queryhelp_onorbitthrusterstatus` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_onorbitthrusterstatus` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `onorbitthrusterstatus.history`:

- `list_onorbitthrusterstatus_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_onorbitthrusterstatus_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `operatingunit`:

- `create_operatingunit` (`write`): Service operation to take a single Operatingunit as a POST body and ingest into the database. Operatingunit defines a unit or organization which operates or controls a space-related Entity. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_operatingunit` (`write`): Service operation to update a single Operatingunit. Operatingunit defines a unit or organization which operates or controls a space-related Entity. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_operatingunit` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_operatingunit` (`write`): Service operation to delete an Operatingunit object specified by the passed ID path parameter. Operatingunit defines a unit or organization which operates or controls a space-related Entity. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_operatingunit` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_operatingunit` (`read`): Service operation to get a single Operatingunit record by its unique ID passed as a path parameter. Operatingunit defines a unit or organization which operates or controls a space-related Entity.
- `queryhelp_operatingunit` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_operatingunit` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `operatingunitremark`:

- `create_operatingunitremark` (`write`): Service operation to take a single operatingunitremark record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_operatingunitremark` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_operatingunitremark` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_operatingunitremark` (`write`): Service operation intended for initial integration only, to take a list of operatingunitremark records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_operatingunitremark` (`read`): Service operation to get a single operatingunitremark record by its unique ID passed as a path parameter.
- `queryhelp_operatingunitremark` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_operatingunitremark` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `orbitdetermination`:

- `create_orbitdetermination` (`write`): Service operation to take a single OrbitDetermination record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_orbitdetermination` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_orbitdetermination` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_orbitdetermination` (`write`): Service operation intended for initial integration only, to take a list of OrbitDetermination records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into the UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_orbitdetermination` (`read`): Service operation to get a single OrbitDetermination record by its unique ID passed as a path parameter.
- `queryhelp_orbitdetermination` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_orbitdetermination` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_orbitdetermination` (`write`): Service operation to take multiple OrbitDetermination records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `orbitdetermination.history`:

- `list_orbitdetermination_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_orbitdetermination_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_orbitdetermination_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `orbittrack`:

- `list_orbittrack` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_orbittrack` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_orbittrack` (`write`): Service operation intended for initial integration only, to take a list of orbit track records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `queryhelp_orbittrack` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_orbittrack` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_orbittrack` (`write`): Service operation to take multiple orbit track records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `orbittrack.history`:

- `list_orbittrack_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_orbittrack_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_orbittrack_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `organization`:

- `create_organization` (`write`): Service operation to take a single Organization as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_organization` (`write`): Service operation to update an Organization. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_organization` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_organization` (`write`): Service operation to delete an Organization specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_organization` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_organization` (`read`): Service operation to get a single Organization by its unique ID passed as a path parameter.
- `get_organization_categories_organization` (`read`): Retrieves all distinct organization categories.
- `get_organization_types_organization` (`read`): Retrieves all distinct organization types.
- `queryhelp_organization` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_organization` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `organizationdetails`:

- `create_organizationdetails` (`write`): Service operation to take a single OrganizationDetails as a POST body and ingest into the database. OrganizationDetails represent details of organizations such as a corporation, manufacturer, consortium, government, etc. An organization can have detail records from several sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_organizationdetails` (`write`): Service operation to update an OrganizationDetails object. OrganizationDetails represent details of organizations such as a corporation, manufacturer, consortium, government, etc. An organization can have detail records from several sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_organizationdetails` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_organizationdetails` (`write`): Service operation to delete an OrganizationDetails specified by the passed ID path parameter. OrganizationDetails represent details of organizations such as a corporation, manufacturer, consortium, government, etc. An organization can have detail records from several sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `find_by_source_organizationdetails` (`read`): Service operation to get a single OrganizationDetails by a source passed as a query parameter. OrganizationDetails represent details of organizations such as a corporation, manufacturer, consortium, government, etc. An organization can have detail records from several sources.
- `get_organizationdetails` (`read`): Service operation to get a single OrganizationDetails by its unique ID passed as a path parameter. OrganizationDetails represent details of organizations such as a corporation, manufacturer, consortium, government, etc. An organization can have detail records from several sources.

### Resource `personnelrecovery`:

- `create_personnelrecovery` (`write`): Service operation to take a single Personnel Recovery object as a POST body and ingest into the database. Requires a specific role, please contact the UDL team to gain access.
- `list_personnelrecovery` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_personnelrecovery` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_personnelrecovery` (`write`): Service operation intended for initial integration only, to take a list of Personnel Recovery records as a POST body and ingest into the database. Requires specific roles, please contact the UDL team to gain access. This operation is not intended to be used for automated feeds into UDL...data providers should contact the UDL team for instructions on setting up a permanent feed through an alternate mechanism.
- `file_create_personnelrecovery` (`write`): Service operation to take a list of Personnel Recovery records as a POST body and ingest into the database. Requires a specific role, please contact the UDL team to gain access. This operation is intended to be used for automated feeds into UDL.
- `get_personnelrecovery` (`read`): Service operation to get a single PersonnelRecovery by its unique ID passed as a path parameter.
- `queryhelp_personnelrecovery` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_personnelrecovery` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `personnelrecovery.history`:

- `list_personnelrecovery_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_personnelrecovery_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `poi`:

- `create_poi` (`write`): Service operation to take a single POI as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_poi` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_poi` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_poi` (`write`): Service operation intended for initial integration only, to take a list of POIs as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_poi` (`read`): Service operation to get a single POI by its unique ID passed as a path parameter.
- `queryhelp_poi` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_poi` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_poi` (`write`): Service operation to take a list of POIs as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `port`:

- `create_port` (`write`): Service operation to take a single port record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_port` (`write`): Service operation to update a single port record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_port` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_port` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_port` (`write`): Service operation intended for initial integration only, to take a list of port records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_port` (`read`): Service operation to get a single port record by its unique ID passed as a path parameter.
- `queryhelp_port` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_port` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `rf_band`:

- `create_rf_band` (`write`): Service operation to take a single RFBand as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_rf_band` (`write`): Service operation to update an RFBand. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_rf_band` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_rf_band` (`write`): Service operation to delete an RFBand specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_rf_band` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_rf_band` (`read`): Service operation to get a single RFBand by its unique ID passed as a path parameter.
- `queryhelp_rf_band` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_rf_band` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `rf_band_type`:

- `create_rf_band_type` (`write`): Service operation to take a single RFBandType as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_rf_band_type` (`write`): Service operation to update an RFBandType. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_rf_band_type` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_rf_band_type` (`write`): Service operation to delete an RFBandType specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_rf_band_type` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_rf_band_type` (`read`): Service operation to get a single RFBandType by its unique ID passed as a path parameter.
- `queryhelp_rf_band_type` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_rf_band_type` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `rf_emitter`:

- `create_rf_emitter` (`write`): Service operation to take a single RFEmitter as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_rf_emitter` (`write`): Service operation to update an RFEmitter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_rf_emitter` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_rf_emitter` (`write`): Service operation to delete an RFEmitter specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_rf_emitter` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_rf_emitter` (`read`): Service operation to get a single RFEmitter by its unique ID passed as a path parameter.
- `queryhelp_rf_emitter` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_rf_emitter` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `rf_emitter_details`:

- `create_rf_emitter_details` (`write`): Service operation to take a single RFEmitterDetails as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_rf_emitter_details` (`write`): Service operation to update an RFEmitterDetails. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_rf_emitter_details` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_rf_emitter_details` (`write`): Service operation to delete an RFEmitterDetails specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_rf_emitter_details` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_rf_emitter_details` (`read`): Service operation to get a single RFEmitterDetails by its unique ID passed as a path parameter.
- `queryhelp_rf_emitter_details` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_rf_emitter_details` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `sar_observation`:

- `create_sar_observation` (`write`): Service operation to take a single SAR observation as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `list_sar_observation` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_sar_observation` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_sar_observation` (`write`): Service operation intended for initial integration only, to take a list of SAR observations as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_sar_observation` (`read`): Service operation to get a single SAR observations by its unique ID passed as a path parameter.
- `queryhelp_sar_observation` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_sar_observation` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_sar_observation` (`write`): Service operation to take SAR observations as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `sar_observation.history`:

- `retrieve_sar_observation_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_sar_observation_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_sar_observation_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `scientific`:

- `create_scientific` (`write`): Service operation to take a single Scientific as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_scientific` (`write`): Service operation to update a single Scientific. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_scientific` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_scientific` (`write`): Service operation to delete a Scientific object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_scientific` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_scientific` (`read`): Service operation to get a single Scientific record by its unique ID passed as a path parameter.
- `queryhelp_scientific` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_scientific` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `sensor`:

- `create_sensor` (`write`): Service operation to take a single sensor as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_sensor` (`write`): Service operation to update a single Sensor. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_sensor` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_sensor` (`write`): Service operation to delete a Sensor specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_sensor` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_sensor` (`read`): Service operation to get a single Sensor by its unique ID passed as a path parameter.
- `queryhelp_sensor` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_sensor` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `sensor.calibration`:

- `create_sensor_calibration` (`write`): Service operation to take a single SensorCalibration as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `retrieve_sensor_calibration` (`read`): Service operation to get a single SensorCalibration by its unique ID passed as a path parameter.
- `count_sensor_calibration` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_sensor_calibration` (`write`): Service operation intended for initial integration only, to take a list of SensorCalibrations as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_sensor_calibration` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_help_sensor_calibration` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_sensor_calibration` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_sensor_calibration` (`write`): Service operation to take multiple sensorcalibration records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `sensor.calibration.history`:

- `count_calibration_sensor_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_calibration_sensor_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `write_aodr_calibration_sensor_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `sensor_maintenance`:

- `create_sensor_maintenance` (`write`): Service operation to take a single SensorMaintenance as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_sensor_maintenance` (`write`): Service operation to update a single SensorMaintenance. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_sensor_maintenance` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_sensor_maintenance` (`write`): Service operation to delete a SensorMaintenance object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_sensor_maintenance` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_sensor_maintenance` (`write`): Service operation to take multiple SensorMaintenance as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `current_sensor_maintenance` (`read`): Service operation to get current Sensor Maintenance records using any number of additional parameters.
- `get_sensor_maintenance` (`read`): Service operation to get a single SensorMaintenance record by its unique ID passed as a path parameter.
- `queryhelp_sensor_maintenance` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_sensor_maintenance` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `sensor_maintenance.history`:

- `retrieve_sensor_maintenance_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_sensor_maintenance_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_sensor_maintenance_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `sensor_observation_type`:

- `list_sensor_observation_type` (`read`):
- `get_sensor_observation_type` (`read`):
- `queryhelp_sensor_observation_type` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.

### Resource `sensor_plan`:

- `create_sensor_plan` (`write`): Service operation to take a single sensor plan as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_sensor_plan` (`write`): Service operation to update a single SensorPlan. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_sensor_plan` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_sensor_plan` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_sensor_plan` (`read`): Service operation to get a single SensorPlan by its unique ID passed as a path parameter.
- `queryhelp_sensor_plan` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_sensor_plan` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_sensor_plan` (`write`): Service operation to take one or more sensorplan record(s) as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `sensor_plan.history`:

- `retrieve_sensor_plan_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_sensor_plan_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_sensor_plan_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `sensor_type`:

- `list_sensor_type` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_sensor_type` (`read`): Service operation to get a single Sensortype record by its unique ID passed as a path parameter.
- `queryhelp_sensor_type` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.

### Resource `sera_data_comm_details`:

- `create_sera_data_comm_details` (`write`): Service operation to take a single SeradataCommDetails as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_sera_data_comm_details` (`write`): Service operation to update an SeradataCommDetails. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_sera_data_comm_details` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_sera_data_comm_details` (`write`): Service operation to delete an SeradataCommDetails specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_sera_data_comm_details` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_sera_data_comm_details` (`read`): Service operation to get a single SeradataCommDetails by its unique ID passed as a path parameter.
- `queryhelp_sera_data_comm_details` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_sera_data_comm_details` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `sera_data_early_warning`:

- `create_sera_data_early_warning` (`write`): Service operation to take a single SeradataEarlyWarning as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_sera_data_early_warning` (`write`): Service operation to update an SeradataEarlyWarning. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_sera_data_early_warning` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_sera_data_early_warning` (`write`): Service operation to delete an SeradataEarlyWarning specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_sera_data_early_warning` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_sera_data_early_warning` (`read`): Service operation to get a single SeradataEarlyWarning by its unique ID passed as a path parameter.
- `queryhelp_sera_data_early_warning` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_sera_data_early_warning` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `sera_data_navigation`:

- `create_sera_data_navigation` (`write`): Service operation to take a single SeradataNavigation as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_sera_data_navigation` (`write`): Service operation to update an SeradataNavigation. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_sera_data_navigation` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_sera_data_navigation` (`write`): Service operation to delete an SeradataNavigation specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_sera_data_navigation` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_sera_data_navigation` (`read`): Service operation to get a single SeradataNavigation by its unique ID passed as a path parameter.
- `queryhelp_sera_data_navigation` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_sera_data_navigation` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `seradata_optical_payload`:

- `create_seradata_optical_payload` (`write`): Service operation to take a single SeradataOpticalPayload as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_seradata_optical_payload` (`write`): Service operation to update an SeradataOpticalPayload. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_seradata_optical_payload` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_seradata_optical_payload` (`write`): Service operation to delete an SeradataOpticalPayload specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_seradata_optical_payload` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_seradata_optical_payload` (`read`): Service operation to get a single SeradataOpticalPayload by its unique ID passed as a path parameter.
- `queryhelp_seradata_optical_payload` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_seradata_optical_payload` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `seradata_radar_payload`:

- `create_seradata_radar_payload` (`write`): Service operation to take a single SeradataRadarPayload as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_seradata_radar_payload` (`write`): Service operation to update an SeradataRadarPayload. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_seradata_radar_payload` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_seradata_radar_payload` (`write`): Service operation to delete an SeradataRadarPayload specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_seradata_radar_payload` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_seradata_radar_payload` (`read`): Service operation to get a single SeradataRadarPayload by its unique ID passed as a path parameter.
- `queryhelp_seradata_radar_payload` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_seradata_radar_payload` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `seradata_sigint_payload`:

- `create_seradata_sigint_payload` (`write`): Service operation to take a single SeradataSigIntPayload as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_seradata_sigint_payload` (`write`): Service operation to update an SeradataSigIntPayload. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_seradata_sigint_payload` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_seradata_sigint_payload` (`write`): Service operation to delete an SeradataSigIntPayload specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_seradata_sigint_payload` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_seradata_sigint_payload` (`read`): Service operation to get a single SeradataSigIntPayload by its unique ID passed as a path parameter.
- `queryhelp_seradata_sigint_payload` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_seradata_sigint_payload` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `seradata_spacecraft_details`:

- `create_seradata_spacecraft_details` (`write`): Service operation to take a single SeradataSpacecraftDetails as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_seradata_spacecraft_details` (`write`): Service operation to update an SeradataSpacecraftDetails. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_seradata_spacecraft_details` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_seradata_spacecraft_details` (`write`): Service operation to delete an SeradataSpacecraftDetails specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_seradata_spacecraft_details` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_seradata_spacecraft_details` (`read`): Service operation to get a single SeradataSpacecraftDetails by its unique ID passed as a path parameter.
- `queryhelp_seradata_spacecraft_details` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_seradata_spacecraft_details` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `sgi`:

- `create_sgi` (`write`): Service operation to take a single SGI record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_sgi` (`write`): Service operation to update a single SGI record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_sgi` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_sgi` (`write`): Service operation to delete a SGI record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_sgi` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_sgi` (`write`): Service operation intended for initial integration only, to take a list of SGI as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_sgi` (`read`): Service operation to get a single SGI record by its unique ID passed as a path parameter.
- `get_data_by_effective_as_of_date_sgi` (`read`): Service to return matching SGI records as of the effective date.
- `queryhelp_sgi` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_sgi` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_sgi` (`write`): Service operation to take multiple SGI as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `sgi.history`:

- `list_sgi_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_sgi_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_sgi_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `sigact`:

- `list_sigact` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_sigact` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_sigact` (`write`): Service operation intended for initial integration only, to take a list of SigAct records as a POST body and ingest into the database. Requires specific roles, please contact the UDL team to gain access. This operation is not intended to be used for automated feeds into UDL...data providers should contact the UDL team for instructions on setting up a permanent feed through an alternate mechanism.
- `queryhelp_sigact` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_sigact` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `upload_zip_sigact` (`write`): Upload a text file with its metadata. This operation bypasses the length constraints of the `eventDescription` field.

  The request body requires a zip file containing exactly two files:\
  1\) A file with the `.json` file extension whose content conforms to the `SigAct_Ingest` schema.\
  2\) A UTF-8 encoded file with the `.txt` file extension.

  The JSON and text files will be associated with each other via the `id` field. Query the metadata via `GET /udl/sigact` and use `GET /udl/sigact/getFile/{id}` to retrieve the text file.

  This operation only accepts application/zip media. The application/json request body is documented to provide a convenient reference to the ingest schema.

  This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `sigact.history`:

- `list_sigact_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_sigact_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `site`:

- `create_site` (`write`): Service operation to take a single Site as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_site` (`write`): Service operation to update a single Site. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_site` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_site` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_site` (`read`): Service operation to get a single Site record by its unique ID passed as a path parameter.
- `queryhelp_site` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_site` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `site.operations`:

- `create_site_operations` (`write`): Service operation to take a single siteoperations object as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_site_operations` (`read`): Service operation to get a single siteoperations record by its unique ID passed as a path parameter.
- `update_site_operations` (`write`): Service operation to update a single siteoperations record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_site_operations` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_site_operations` (`write`): Service operation to delete a siteoperations record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_site_operations` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_site_operations` (`write`): Service operation intended for initial integration only, to take a list of siteoperations records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `query_help_site_operations` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_site_operations` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_site_operations` (`write`): Service operation to take multiple siteoperations records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `site_remark`:

- `create_site_remark` (`write`): Service operation to take a single remark record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_site_remark` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_site_remark` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_site_remark` (`read`): Service operation to get a single remark record by its unique ID passed as a path parameter.
- `queryhelp_site_remark` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_site_remark` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `site_status`:

- `create_site_status` (`write`): Service operation to take a single SiteStatus object as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_site_status` (`write`): Service operation to update a single SiteStatus object. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_site_status` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_site_status` (`write`): Service operation to delete an SiteStatus object specified by the passed ID path parameter. Note, delete operations do not remove data from historical or publish/subscribe stores. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_site_status` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_site_status` (`read`): Service operation to get a single SiteStatus record by its unique ID passed as a path parameter.
- `queryhelp_site_status` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_site_status` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `site_status.history`:

- `list_site_status_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_site_status_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `sky_imagery`:

- `list_sky_imagery` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_sky_imagery` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `file_get_sky_imagery` (`read`): Service operation to get a single SkyImagery binary image by its unique ID passed as a path parameter. The image is returned as an attachment Content-Disposition.
- `get_sky_imagery` (`read`): Service operation to get a single SkyImagery record by its unique ID passed as a path parameter. SkyImagery represents metadata about a sky image, as well as the actual binary image data.
- `queryhelp_sky_imagery` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_sky_imagery` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `upload_zip_sky_imagery` (`write`): Upload a new image with its metadata.

  The request body requires a zip file containing exactly two files:\
  1\) A file with the `.json` file extension whose content conforms to the `SkyImagery_Ingest` schema.\
  2\) A binary image file of the allowed types for this service.

  The JSON and image files will be associated with each other via the `id` field. Query the metadata via `GET /udl/skyimagery` and use `GET /udl/skyimagery/getFile/{id}` to retrieve the binary image file.

  This operation only accepts application/zip media. The application/json request body is documented to provide a convenient reference to the ingest schema.

  This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `sky_imagery.history`:

- `list_sky_imagery_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_sky_imagery_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_sky_imagery_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `soi_observation_set`:

- `create_soi_observation_set` (`write`): Service operation to take a single SOIObservationSet record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_soi_observation_set` (`read`): Service operation to dynamically query data by a variety of query parameters. The query will return the SOI Observation Sets and not the associated SOI Observations. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_soi_observation_set` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_soi_observation_set` (`write`): Service operation intended for initial integration only, to take a list of SOIObservationSet records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_soi_observation_set` (`read`): Service operation to get a single SOIObservationSet by its unique ID passed as a path parameter.
- `queryhelp_soi_observation_set` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_soi_observation_set` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_soi_observation_set` (`write`): Service operation to take multiple SOIObservationSet records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `soi_observation_set.history`:

- `list_soi_observation_set_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_soi_observation_set_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_soi_observation_set_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `solar_array`:

- `create_solar_array` (`write`): Service operation to take a single SolarArray as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_solar_array` (`write`): Service operation to update a single SolarArray. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_solar_array` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_solar_array` (`write`): Service operation to delete a SolarArray object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_solar_array` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_solar_array` (`read`): Service operation to get a single SolarArray record by its unique ID passed as a path parameter.
- `queryhelp_solar_array` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_solar_array` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `solar_array_details`:

- `create_solar_array_details` (`write`): Service operation to take a single SolarArrayDetails as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance. A SolarArray may have multiple details records compiled by various sources.
- `update_solar_array_details` (`write`): Service operation to update a single SolarArrayDetails. A specific role is required to perform this service operation. Please contact the UDL team for assistance. A SolarArray may have multiple details records compiled by various sources.
- `list_solar_array_details` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_solar_array_details` (`write`): Service operation to delete a SolarArrayDetails object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance. A SolarArray may have multiple details records compiled by various sources.
- `get_solar_array_details` (`read`): Service operation to get a single SolarArrayDetails record by its unique ID passed as a path parameter. A SolarArray may have multiple details records compiled by various sources.

### Resource `sortie_ppr`:

- `create_sortie_ppr` (`write`): Service operation to take a single sortieppr record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_sortie_ppr` (`write`): Service operation to update a single sortieppr record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_sortie_ppr` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_sortie_ppr` (`write`): Service operation to delete a sortieppr record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_sortie_ppr` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_sortie_ppr` (`write`): Service operation intended for initial integration only, to take a list of SortiePPR records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_sortie_ppr` (`read`): Service operation to get a single sortieppr record by its unique ID passed as a path parameter.
- `queryhelp_sortie_ppr` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_sortie_ppr` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_sortie_ppr` (`write`): Service operation to take SortiePPR as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `sortie_ppr.history`:

- `list_sortie_ppr_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_sortie_ppr_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_sortie_ppr_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `space_env_observation`:

- `list_space_env_observation` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_space_env_observation` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_space_env_observation` (`write`): Service operation intended for initial integration only, to take a list of SpaceEnvObservation records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `queryhelp_space_env_observation` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_space_env_observation` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_space_env_observation` (`write`): Service operation to accept one or more SpaceEnvObservation(s) as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `space_env_observation.history`:

- `list_space_env_observation_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_space_env_observation_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_space_env_observation_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `stage`:

- `create_stage` (`write`): Service operation to take a single Stage as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance. A Stage represents various stages of a particular launch vehicle, compiled by a particular source. A vehicle may have multiple stage records.
- `update_stage` (`write`): Service operation to update a single Stage. A specific role is required to perform this service operation. Please contact the UDL team for assistance. A Stage represents various stages of a particular launch vehicle, compiled by a particular source. A vehicle may have multiple stage records.
- `list_stage` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_stage` (`write`): Service operation to delete a Stage object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance. A Stage represents various stages of a particular launch vehicle, compiled by a particular source. A vehicle may have multiple stage records.
- `count_stage` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_stage` (`read`): Service operation to get a single Stage record by its unique ID passed as a path parameter. A Stage represents various stages of a particular launch vehicle, compiled by a particular source. A vehicle may have multiple stage records.
- `queryhelp_stage` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_stage` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `star_catalog`:

- `create_star_catalog` (`write`): Service operation to take a single StarCatalog record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_star_catalog` (`write`): Service operation to update a single starcatalog record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_star_catalog` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_star_catalog` (`write`): Service operation to delete a dataset specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_star_catalog` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_star_catalog` (`write`): Service operation intended for initial integration only, to take a list of StarCatalog records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_star_catalog` (`read`): Service operation to get a single StarCatalog record by its unique ID passed as a path parameter.
- `queryhelp_star_catalog` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_star_catalog` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_star_catalog` (`write`): Service operation to take multiple StarCatalog records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `star_catalog.history`:

- `aodr_star_catalog_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `state_vector`:

- `create_state_vector` (`write`): Service operation to take a single state vector as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `list_state_vector` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_state_vector` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_state_vector` (`write`): Service operation intended for initial integration only, to take a list of state vectors as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_state_vector` (`read`): Service operation to get a single state vector by its unique ID passed as a path parameter.
- `queryhelp_state_vector` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_state_vector` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_state_vector` (`write`): Service operation to take multiple state vectors as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `state_vector.history`:

- `list_state_vector_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_state_vector_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_state_vector_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `state_vector.current`:

- `list_state_vector_current` (`read`): Service operation to dynamically query/filter current StateVector data within the system by a variety of query parameters not specified in this API documentation. A current StateVector is the currently active, latest StateVector for an on-orbit object. Current state vectors are tracked by source and a source should be provided as a query parameter to this service operation to view the 'current' catalog for a particular provider. Default current state vector sources may vary by UDL environment. Please contact the UDL help desk for more information, or explicitly specify the desired source. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `tuple_state_vector_current` (`read`): Service operation to dynamically query/filter current StateVector data within the system by a variety of query parameters not specified in this API documentation. A current StateVector is the currently active, latest StateVector for an on-orbit object. Current state vectors are tracked by source and a source should be provided as a query parameter to this service operation to view the 'current' catalog for a particular provider. Default current state vector sources may vary by UDL environment. Please contact the UDL help desk for more information, or explicitly specify the desired source. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `status`:

- `create_status` (`write`): Service operation to take a single Status as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_status` (`write`): Service operation to update a single Status. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_status` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_status` (`write`): Service operation to delete a Status object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_status` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_status` (`read`): Service operation to get a single Status record by its unique ID passed as a path parameter.
- `get_by_entity_id_status` (`read`): Service operation to get all statuses related to a particular entity.
- `get_by_entity_type_status` (`read`): Service operation to get all statuses related to a particular entity type.
- `queryhelp_status` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_status` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `substatus`:

- `create_substatus` (`write`): Service operation to take a single Sub Status record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_substatus` (`write`): Service operation to update a single Sub Status record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_substatus` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_substatus` (`write`): Service operation to delete a Sub Status record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_substatus` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_substatus` (`read`): Service operation to get a single Sub Status record by its unique ID passed as a path parameter.
- `queryhelp_substatus` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_substatus` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `supporting_data.data_types`:

- `list_supporting_data_data_types` (`read`): Retrieves all distinct data owner types.

### Resource `supporting_data.dataowner`:

- `retrieve_supporting_data_dataowner` (`read`):
- `count_supporting_data_dataowner` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_help_supporting_data_dataowner` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `retrieve_data_owner_types_supporting_data_dataowner` (`read`): Retrieves all distinct data owner types.
- `retrieve_provider_metadata_supporting_data_dataowner` (`read`):

### Resource `surface`:

- `create_surface` (`write`): Service operation to take a single Surface as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_surface` (`write`): Service operation to update a single Surface. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_surface` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_surface` (`write`): Service operation to delete a Surface object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_surface` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_surface` (`read`): Service operation to get a single Surface record by its unique ID passed as a path parameter.
- `queryhelp_surface` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_surface` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `surface_obstruction`:

- `create_surface_obstruction` (`write`): Service operation to take a single surfaceobstruction record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_surface_obstruction` (`write`): Service operation to update a single surfaceobstruction record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_surface_obstruction` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_surface_obstruction` (`write`): Service operation to delete a surfaceobstruction record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_surface_obstruction` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_surface_obstruction` (`read`): Service operation to get a single surfaceobstruction record by its unique ID passed as a path parameter.
- `queryhelp_surface_obstruction` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_surface_obstruction` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_surface_obstruction` (`write`): Service operation to take multiple surfaceobstruction records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `swir`:

- `create_swir` (`write`): Service operation to take a single SWIR record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_swir` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_swir` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_swir` (`write`): Service operation intended for initial integration only, to take a list of SWIR records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_swir` (`read`): Service operation to get a single SWIR record by its unique ID passed as a path parameter.
- `queryhelp_swir` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_swir` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `swir.history`:

- `list_swir_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_swir_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_swir_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `tai_utc`:

- `create_tai_utc` (`write`): Service operation to take a single TAIUTC object as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_tai_utc` (`write`): Service operation to update a single TAIUTC object. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_tai_utc` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_tai_utc` (`write`): Service operation to delete an TAIUTC object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance. Note, delete operations do not remove data from historical or publish/subscribe stores.
- `count_tai_utc` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_tai_utc` (`read`): Service operation to get a single TAIUTC record by its unique ID passed as a path parameter.
- `queryhelp_tai_utc` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_tai_utc` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `tai_utc.history`:

- `list_tai_utc_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_tai_utc_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_tai_utc_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `tdoa_fdoa.diffofarrival`:

- `create_tdoa_fdoa_diffofarrival` (`write`): Service operation to take a single TDOA/FDOA record as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `list_tdoa_fdoa_diffofarrival` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_tdoa_fdoa_diffofarrival` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_tdoa_fdoa_diffofarrival` (`write`): Service operation intended for initial integration only, to take a list of TDOA/FDOA records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.

### Resource `tdoa_fdoa.diffofarrival.history`:

- `list_diffofarrival_tdoa_fdoa_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_diffofarrival_tdoa_fdoa_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `track`:

- `list_track` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_track` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_track` (`write`): Service operation intended for initial integration only, to take a list of Track records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `queryhelp_track` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_track` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_track` (`write`): Service operation to take multiple tracks as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `track.history`:

- `list_track_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_track_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_track_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `track_details`:

- `list_track_details` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_track_details` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_track_details` (`write`): Service operation intended for initial integration only, to take a list of Track Details records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `queryhelp_track_details` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_track_details` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `track_details.history`:

- `list_track_details_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_track_details_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_track_details_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `track_route`:

- `create_track_route` (`write`): Service operation to take a single trackroute record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_track_route` (`write`): Service operation to update a single trackroute record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_track_route` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_track_route` (`write`): Service operation to delete a trackroute record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `count_track_route` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_track_route` (`write`): Service operation intended for initial integration only, to take a list of trackroute records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_track_route` (`read`): Service operation to get a single trackroute record by its unique ID passed as a path parameter.
- `queryhelp_track_route` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_track_route` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_track_route` (`write`): Service operation to take multiple trackroute records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `track_route.history`:

- `list_track_route_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_track_route_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_track_route_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `transponder`:

- `create_transponder` (`write`): Service operation to take a single Transponder as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance. A Comm payload may have multiple transponders and a transponder may have many channels.
- `update_transponder` (`write`): Service operation to update a single Transponder. A specific role is required to perform this service operation. Please contact the UDL team for assistance. A Comm payload may have multiple transponders and a transponder may have many channels.
- `list_transponder` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `delete_transponder` (`write`): Service operation to delete a Transponder object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance. A Comm payload may have multiple transponders and a transponder may have many channels.
- `count_transponder` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_transponder` (`read`): Service operation to get a single Transponder record by its unique ID passed as a path parameter. A Comm payload may have multiple transponders and a transponder may have many channels.
- `queryhelp_transponder` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_transponder` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `vessel`:

- `create_vessel` (`write`): Service operation to take a single vessel record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `update_vessel` (`write`): Service operation to update a single vessel record. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_vessel` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_vessel` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_vessel` (`write`): Service operation intended for initial integration only, to take a list of vessel records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `get_vessel` (`read`): Service operation to get a single vessel record by its unique ID passed as a path parameter.
- `queryhelp_vessel` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_vessel` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `video`:

- `create_video` (`write`): Service operation to take a single Video Stream record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_video` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_video` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_video` (`read`): Service operation to get a single Video Stream record by its unique ID passed as a path parameter.
- `get_player_streaming_info_video` (`read`): Service operation to retrieve player URL and token for given stream name and source.
- `get_publisher_streaming_info_video` (`read`): Service operation to retrieve publisher URL and token for given stream name and source.
- `get_stream_file_video` (`read`): Service operation to retrieve a static pre-configured SRT or UDP streamfile URL for given stream name and source.
- `queryhelp_video` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_video` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.

### Resource `video.history`:

- `list_video_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_video_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `weather_data`:

- `create_weather_data` (`write`): Service operation to take a single WeatherData as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_weather_data` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_weather_data` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_weather_data` (`write`): Service operation to take multiple WeatherData as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `get_weather_data` (`read`): Service operation to get a single WeatherData by its unique ID passed as a path parameter.
- `queryhelp_weather_data` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_weather_data` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_weather_data` (`write`): Service operation to take a list of WeatherData as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `weather_data.history`:

- `list_weather_data_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_weather_data_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_weather_data_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `weather_report`:

- `create_weather_report` (`write`): Service operation to take a single WeatherReport as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_weather_report` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_weather_report` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `get_weather_report` (`read`): Service operation to get a single WeatherReport by its unique ID passed as a path parameter.
- `queryhelp_weather_report` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_weather_report` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_weather_report` (`write`): Service operation to take a list of WeatherReports as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `weather_report.history`:

- `list_weather_report_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_weather_report_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_weather_report_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `gnss_observations.history`:

- `count_gnss_observations_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `gnss_raw_if`:

- `list_gnss_raw_if` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_gnss_raw_if` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `file_get_gnss_raw_if` (`read`): Service operation to get a single GNSSRAWIF hdf5 file by its unique ID passed as a path parameter. The file is returned as an attachment Content-Disposition.
- `get_gnss_raw_if` (`read`): Service operation to get a single GNSSRawIF by its unique ID passed as a path parameter.
- `queryhelp_gnss_raw_if` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_gnss_raw_if` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `upload_zip_gnss_raw_if` (`write`): Upload an HDF5 file with its metadata.

  The request body requires a zip file containing exactly two files:\
  1\) A file with the `.json` file extension whose content conforms to the `GNSSRawIF_Ingest` schema.\
  2\) A file with the `.hdf5` file extension.

  The JSON and HDF5 files will be associated with each other via the `id` field. Query the metadata via `GET /udl/gnssrawif` and use `GET /udl/gnssrawif/getFile/{id}` to retrieve the HDF5 file.

  This operation only accepts application/zip media. The application/json request body is documented to provide a convenient reference to the ingest schema.

  This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `gnss_raw_if.history`:

- `aodr_gnss_raw_if_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_gnss_raw_if_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `query_gnss_raw_if_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `iono_observations`:

- `list_iono_observations` (`read`): Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_iono_observations` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `create_bulk_iono_observations` (`write`): Service operation intended for initial integration only, to take a list of IonoObservation records as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.
- `queryhelp_iono_observations` (`read`): Service operation to provide detailed information on available dynamic query parameters for a particular data type.
- `tuple_iono_observations` (`read`): Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.
- `unvalidated_publish_iono_observations` (`write`): Service operation to take Ionospheric Observation entries as a POST body and ingest into the database with or without dupe detection. Default is no dupe checking. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `iono_observations.history`:

- `list_iono_observations_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_iono_observations_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_iono_observations_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `report_and_activities.poi.history`:

- `list_poi_report_and_activities_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `aodr_poi_report_and_activities_history` (`read`): Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.
- `count_poi_report_and_activities_history` (`read`): Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.

### Resource `report_and_activities.udl_h3geo`:

- `unvalidated_publish_report_and_activities_udl_h3geo` (`write`): Service operation to take a single H3Geo record and many associated H3Geo hex cell records as a POST body and ingest into the database. This operation is intended to be used for automated feeds into UDL. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `report_and_activities.udl_sigact`:

- `file_get_report_and_activities_udl_sigact` (`read`): Service operation to get a single SigAct text file by its unique ID passed as a path parameter. The text file is returned as an attachment Content-Disposition.
- `unvalidated_publish_report_and_activities_udl_sigact` (`write`): Service operation to take a list of SigAct as a POST body and ingest into the database. A SigAct provides data for Report and Activity information. Requires a specific role, please contact the UDL team to gain access. This operation is intended to be used for automated feeds into UDL.

### Resource `secure_messaging`:

- `describe_topic_secure_messaging` (`read`): Retrieve the details of the specified topic or data type.
- `get_latest_offset_secure_messaging` (`read`): Returns the current/latest offset for the passed topic name.
- `get_messages_secure_messaging` (`read`): Retrieve a set of messages from the given topic at the given offset. See Help > Secure Messaging API on Storefront for more details on how to use getMessages.
- `list_topics_secure_messaging` (`read`): Retrieve the list of available secure messaging topics or data types available.

### Resource `scs`:

- `delete_scs` (`write`): Deletes the requested file or folder in the passed path directory that is visible to the calling user. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `aggregate_doc_type_scs` (`read`): Returns a map of document types and counts in root folder.
- `allowable_file_extensions_scs` (`read`): Returns a list of allowable file extensions for upload.
- `allowable_file_mimes_scs` (`read`): Returns a list of allowable file mime types for upload.
- `copy_scs` (`write`): operation to copy folders or files. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `download_scs` (`write`): Downloads a zip of one or more files and/or folders.
- `file_download_scs` (`read`): Download a single file from SCS.
- `file_upload_scs` (`write`): Operation to upload a file. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `move_scs` (`write`): operation to move folders or files. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `rename_scs` (`write`): Operation to rename folders or files. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `search_scs` (`write`): Search for files by metadata and/or text in file content.
- `update_tags_scs` (`write`): Updates tags for given folder.

### Resource `scs.folders`:

- `create_scs_folders` (`write`): Creates a new folder that is passed as part of the path. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `retrieve_scs_folders` (`read`): Returns a FileData object representing the folder ID that is visible to the calling user.
- `update_scs_folders` (`write`): operation to update folders metadata. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `scs.classification_markings`:

- `list_scs_classification_markings` (`read`): Returns a list of all classification markings appropriate to the current user.

### Resource `scs.groups`:

- `list_scs_groups` (`read`): Returns a list of all available groups for ACL UIs

### Resource `scs.file_metadata`:

- `list_scs_file_metadata` (`read`): Returns a set of File Metadata that can be used for search endpoint.

### Resource `scs.range_parameters`:

- `list_scs_range_parameters` (`read`): Returns a set of File Metadata that can be used for search endpoint.

### Resource `scs.paths`:

- `create_with_file_scs_paths` (`write`): Creates the path and uploads file that is passed. If folder exist it will only create folders that are missing. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `scs.v2`:

- `update_scs_v2` (`write`): Update folders and files. For a folder, you may update description, writeAcl, readAcl, classificationMarking, and tags. For a file, you may update description, classificationMarking, and tags. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_scs_v2` (`read`): Returns a list of ScsEntity objects, each directly nested under the provided path.
- `delete_scs_v2` (`write`): Operation to delete a folder or file. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `copy_scs_v2` (`write`): Operation to copy a folder or file. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `file_upload_scs_v2` (`write`): Operation to upload a file. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `folder_create_scs_v2` (`write`): Creates all folders in provided path that don't exist. Can be used to create a single folder or a new folder structure. Provided classificationMarking, description, writeAcl, readAcl, and tags are applied to the deepest folder in the provided path. If parent folders are created by this request, each parent folder will be created with the same classificationMarking and tags. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `move_scs_v2` (`write`): Operation to move or rename a folder or file. A specific role is required to perform this service operation. Please contact the UDL team for assistance.

### Resource `scs.file`:

- `retrieve_scs_file` (`read`): Returns a FileData object representing the file with the given ID that is visible to the calling user.
- `update_scs_file` (`write`): operation to update files metadata. A specific role is required to perform this service operation. Please contact the UDL team for assistance.
- `list_scs_file` (`read`): Returns a non-recursive list of FileData objects representing the files and subdirectories in the passed-in path directory that are visible to the calling user.

### Resource `scs_views`:

- `retrieve_scs_views` (`read`): Return a single file to view in browser.
