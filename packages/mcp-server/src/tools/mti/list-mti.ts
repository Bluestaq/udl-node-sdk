// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'mti',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/mti',
};

export const tool: Tool = {
  name: 'list_mti',
  description:
    'Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      createdAt: {
        type: 'string',
        description: 'Time the row was created in the database. (YYYY-MM-DDTHH:MM:SS.sssZ)',
        format: 'date',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
    },
    required: ['createdAt'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.mti.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
