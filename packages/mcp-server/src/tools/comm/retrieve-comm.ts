// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

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
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.comm.retrieve(id, body);
};

export default { metadata, tool, handler };
