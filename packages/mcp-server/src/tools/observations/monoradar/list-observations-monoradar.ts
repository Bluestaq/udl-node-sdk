// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'observations.monoradar',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/monoradar',
};

export const tool: Tool = {
  name: 'list_observations_monoradar',
  description:
    'Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      ts: {
        type: 'string',
        description:
          'Target detection time, in ISO 8601 UTC format with microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)',
        format: 'date-time',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
    },
    required: ['ts'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.observations.monoradar.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
