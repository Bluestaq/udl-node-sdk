// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'batteries',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/battery/{id}',
};

export const tool: Tool = {
  name: 'retrieve_batteries',
  description:
    'Service operation to get a single Battery record by its unique ID passed as a path parameter.',
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
  return client.batteries.retrieve(id, body);
};

export default { metadata, tool, handler };
