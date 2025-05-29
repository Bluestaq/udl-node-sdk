// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs_views',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/scs/view/{id}',
};

export const tool: Tool = {
  name: 'retrieve_scs_views',
  description: 'Return a single file to view in browser.',
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
  return client.scsViews.retrieve(id, body);
};

export default { metadata, tool, handler };
