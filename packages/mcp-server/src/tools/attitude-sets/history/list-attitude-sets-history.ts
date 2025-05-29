// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'attitude_sets.history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/attitudeset/history',
};

export const tool: Tool = {
  name: 'list_attitude_sets_history',
  description:
    'Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      startTime: {
        type: 'string',
        description:
          'The epoch or start time of the attitude parameter or attitude ephemeris, in ISO 8601 UTC format, with microsecond precision.  If this set is constituted by a single attitude parameter message then startTime is the epoch. (YYYY-MM-DDTHH:MM:SS.ssssssZ)',
        format: 'date-time',
      },
      columns: {
        type: 'string',
        description:
          'optional, fields for retrieval. When omitted, ALL fields are assumed. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid query fields that can be selected.',
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
  const body = args as any;
  return client.attitudeSets.history.list(body);
};

export default { metadata, tool, handler };
