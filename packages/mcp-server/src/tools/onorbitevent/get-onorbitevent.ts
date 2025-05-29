// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'onorbitevent',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/onorbitevent/{id}',
};

export const tool: Tool = {
  name: 'get_onorbitevent',
  description:
    'Service operation to get a single OnorbitEvent record by its unique ID passed as a path parameter. An OnorbitEvent is an event associated with a particular on-orbit spacecraft including insurance related losses, anomalies and incidents.',
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
  return client.onorbitevent.get(id, body);
};

export default { metadata, tool, handler };
