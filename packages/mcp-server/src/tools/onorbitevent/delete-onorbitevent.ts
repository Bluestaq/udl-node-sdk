// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'onorbitevent',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/onorbitevent/{id}',
};

export const tool: Tool = {
  name: 'delete_onorbitevent',
  description:
    'Service operation to delete a OnorbitEvent object specified by the passed ID path parameter. An OnorbitEvent is an event associated with a particular on-orbit spacecraft including insurance related losses, anomalies and incidents. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
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
  return client.onorbitevent.delete(id);
};

export default { metadata, tool, handler };
