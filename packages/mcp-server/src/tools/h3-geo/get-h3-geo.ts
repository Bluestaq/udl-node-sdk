// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'h3_geo',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/h3geo/{id}',
};

export const tool: Tool = {
  name: 'get_h3_geo',
  description:
    'Service operation to get a single RF geolocation by its unique ID passed as a path parameter.',
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
  return client.h3Geo.get(id, body);
};

export default { metadata, tool, handler };
