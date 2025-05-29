// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'site.operations',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/siteoperations/{id}',
};

export const tool: Tool = {
  name: 'delete_site_operations',
  description:
    'Service operation to delete a siteoperations record specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
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
  return client.site.operations.delete(id);
};

export default { metadata, tool, handler };
