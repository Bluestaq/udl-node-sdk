// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'udl-node-sdk';

export const metadata: Metadata = {
  resource: 'orbitdetermination',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/orbitdetermination',
};

export const tool: Tool = {
  name: 'list_orbitdetermination',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.",
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
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.orbitdetermination.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
