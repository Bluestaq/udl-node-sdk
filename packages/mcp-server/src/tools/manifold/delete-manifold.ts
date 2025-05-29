// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'manifold',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/manifold/{id}',
};

export const tool: Tool = {
  name: 'delete_manifold',
  description:
    'Service operation to delete a Manifold object specified by the passed ID path parameter. A manifold represents a set of possible/theoretical orbits for an object of interest based on a delta V and delta T. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.manifold.delete(id);
};

export default { metadata, tool, handler };
