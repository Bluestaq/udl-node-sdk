// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'navigation',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/navigation/{id}',
};

export const tool: Tool = {
  name: 'delete_navigation',
  description:
    'Service operation to delete a Navigation object specified by the passed ID path parameter. An Navigation is an on-orbit navigation payload. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
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
  return client.navigation.delete(id);
};

export default { metadata, tool, handler };
