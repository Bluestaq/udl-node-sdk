// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'sensor_maintenance.history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/sensormaintenance/history',
};

export const tool: Tool = {
  name: 'retrieve_sensor_maintenance_history',
  description:
    'Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      columns: {
        type: 'string',
        description:
          'optional, fields for retrieval. When omitted, ALL fields are assumed. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid query fields that can be selected.',
      },
      endTime: {
        type: 'string',
        description:
          "(One or more of fields 'endTime, startTime' are required.) The planned outage end time in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)",
        format: 'date-time',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
      startTime: {
        type: 'string',
        description:
          "(One or more of fields 'endTime, startTime' are required.) The planned outage start time in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)",
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.sensorMaintenance.history.retrieve(body);
};

export default { metadata, tool, handler };
