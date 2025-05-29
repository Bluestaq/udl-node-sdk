// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'ephemeris.attitude_data.history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/attitudedata/history/count',
};

export const tool: Tool = {
  name: 'count_attitude_data_ephemeris_history',
  description:
    'Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      asId: {
        type: 'string',
        description: 'Unique identifier of the parent AttitudeSet associated with this record. (uuid)',
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
  return client.ephemeris.attitudeData.history.count(body);
};

export default { metadata, tool, handler };
