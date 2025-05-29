// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'onorbitlist',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/onorbitlist/{id}',
};

export const tool: Tool = {
  name: 'delete_onorbitlist',
  description:
    'Service operation to delete a OnorbitList object specified by the passed ID path parameter. An OnorbitList is just a generic named list of on-orbit IDs. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
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
  return client.onorbitlist.delete(id);
};

export default { metadata, tool, handler };
