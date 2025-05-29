// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'location',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/location/{id}',
};

export const tool: Tool = {
  name: 'get_location',
  description:
    'Service operation to get a single location record by its unique ID passed as a path parameter. Locations are specific fixed points on the earth and are used to denote the locations of fixed sensors, operating units, etc.',
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
  return client.location.get(id, body);
};

export default { metadata, tool, handler };
