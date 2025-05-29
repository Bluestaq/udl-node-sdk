// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'manifold',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/manifold/{id}',
};

export const tool: Tool = {
  name: 'get_manifold',
  description:
    'Service operation to get a single Manifold record by its unique ID passed as a path parameter.  A manifold represents a set of possible/theoretical orbits for an object of interest based on a delta V and delta T.',
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
  return client.manifold.get(id, body);
};

export default { metadata, tool, handler };
