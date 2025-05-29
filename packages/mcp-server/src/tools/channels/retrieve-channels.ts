// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'channels',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/channel/{id}',
};

export const tool: Tool = {
  name: 'retrieve_channels',
  description:
    'Service operation to get a single Channel record by its unique ID passed as a path parameter. A Comm payload may have multiple transponders and a transponder may have many channels.',
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
  return client.channels.retrieve(id, body);
};

export default { metadata, tool, handler };
