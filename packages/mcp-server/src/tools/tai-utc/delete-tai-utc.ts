// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'tai_utc',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/taiutc/{id}',
};

export const tool: Tool = {
  name: 'delete_tai_utc',
  description:
    'Service operation to delete an TAIUTC object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance. Note, delete operations do not remove data from historical or publish/subscribe stores.',
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
  return client.taiUtc.delete(id);
};

export default { metadata, tool, handler };
