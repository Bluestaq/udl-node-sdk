// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'sensor_maintenance',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/sensormaintenance/current',
};

export const tool: Tool = {
  name: 'current_sensor_maintenance',
  description:
    'Service operation to get current Sensor Maintenance records using any number of additional parameters.',
  inputSchema: {
    type: 'object',
    properties: {
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
  const body = args as any;
  return client.sensorMaintenance.current(body);
};

export default { metadata, tool, handler };
