// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'seradata_radar_payload',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/seradataradarpayload/{id}',
};

export const tool: Tool = {
  name: 'get_seradata_radar_payload',
  description:
    'Service operation to get a single SeradataRadarPayload by its unique ID passed as a path parameter.',
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
  return client.seradataRadarPayload.get(id, body);
};

export default { metadata, tool, handler };
