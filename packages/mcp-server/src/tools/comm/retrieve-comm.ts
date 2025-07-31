// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'udl-node-sdk';

export const metadata: Metadata = {
  resource: 'comm',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/comm/{id}',
};

export const tool: Tool = {
  name: 'retrieve_comm',
  description:
    'Service operation to get a single Comm record by its unique ID passed as a path parameter. A Comm is an on-orbit communications payload, including supporting data such as transponders and channels, etc.',
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
  return asTextContentResult(await client.comm.retrieve(id, body));
};

export default { metadata, tool, handler };
