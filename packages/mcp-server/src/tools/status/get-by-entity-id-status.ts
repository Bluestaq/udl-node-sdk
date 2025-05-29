// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'status',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/status/byIdEntity/{idEntity}',
};

export const tool: Tool = {
  name: 'get_by_entity_id_status',
  description: 'Service operation to get all statuses related to a particular entity.',
  inputSchema: {
    type: 'object',
    properties: {
      idEntity: {
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
  const { idEntity, ...body } = args as any;
  return client.status.getByEntityID(idEntity, body);
};

export default { metadata, tool, handler };
