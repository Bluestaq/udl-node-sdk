// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'navigation',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/navigation/{id}',
};

export const tool: Tool = {
  name: 'get_navigation',
  description:
    'Service operation to get a single Navigation record by its unique ID passed as a path parameter. An Navigation is an on-orbit navigation payload.',
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
  return client.navigation.get(id, body);
};

export default { metadata, tool, handler };
