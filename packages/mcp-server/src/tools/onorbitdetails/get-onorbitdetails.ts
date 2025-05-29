// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'onorbitdetails',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/onorbitdetails/{id}',
};

export const tool: Tool = {
  name: 'get_onorbitdetails',
  description:
    'Service operation to get a single OnorbitDetails record by its unique ID passed as a path parameter. An OnorbitDetails is a collection of additional characteristics on an on-orbit object.',
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
  return client.onorbitdetails.get(id, body);
};

export default { metadata, tool, handler };
