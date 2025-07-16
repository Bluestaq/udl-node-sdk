// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'orbitdetermination.history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/orbitdetermination/history/count',
};

export const tool: Tool = {
  name: 'count_orbitdetermination_history',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      firstResult: {
        type: 'integer',
      },
      idOnOrbit: {
        type: 'string',
        description:
          "(One or more of fields 'idOnOrbit, startTime' are required.) Unique identifier of the target satellite on-orbit object. This ID can be used to obtain additional information on an OnOrbit object using the 'get by ID' operation (e.g. /udl/onorbit/{id}). For example, the OnOrbit with idOnOrbit = 25544 would be queried as /udl/onorbit/25544.",
      },
      maxResults: {
        type: 'integer',
      },
      startTime: {
        type: 'string',
        description:
          "(One or more of fields 'idOnOrbit, startTime' are required.) Start time for OD solution in ISO 8601 UTC datetime format, with microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)",
        format: 'date-time',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.orbitdetermination.history.count(body)));
};

export default { metadata, tool, handler };
