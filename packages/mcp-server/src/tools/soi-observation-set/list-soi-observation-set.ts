// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'soi_observation_set',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/soiobservationset',
};

export const tool: Tool = {
  name: 'list_soi_observation_set',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService operation to dynamically query data by a variety of query parameters. The query will return the SOI Observation Sets and not the associated SOI Observations. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.",
  inputSchema: {
    type: 'object',
    properties: {
      startTime: {
        type: 'string',
        description:
          'Observation set detection start time in ISO 8601 UTC with microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)',
        format: 'date-time',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.soiObservationSet.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
