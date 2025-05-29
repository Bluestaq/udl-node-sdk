// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'sensor_type',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/sensortype/{id}',
};

export const tool: Tool = {
  name: 'get_sensor_type',
  description:
    'Service operation to get a single Sensortype record by its unique ID passed as a path parameter.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
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
  return client.sensorType.get(id, body);
};

export default { metadata, tool, handler };
