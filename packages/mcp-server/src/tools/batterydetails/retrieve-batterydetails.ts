// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'batterydetails',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/batterydetails/{id}',
};

export const tool: Tool = {
  name: 'retrieve_batterydetails',
  description:
    'Service operation to get a single BatteryDetails record by its unique ID passed as a path parameter. A Battery record may have multiple details records from several sources.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.batterydetails.retrieve(id, body));
};

export default { metadata, tool, handler };
