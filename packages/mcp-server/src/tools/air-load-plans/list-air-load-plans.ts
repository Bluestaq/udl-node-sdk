// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'udl-node-sdk';

export const metadata: Metadata = {
  resource: 'air_load_plans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/airloadplan',
};

export const tool: Tool = {
  name: 'list_air_load_plans',
  description:
    'Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      estDepTime: {
        type: 'string',
        description:
          'The current estimated time that the aircraft is planned to depart, in ISO 8601 UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)',
        format: 'date-time',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
    },
    required: ['estDepTime'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.airLoadPlans.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
