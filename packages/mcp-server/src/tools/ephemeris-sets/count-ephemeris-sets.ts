// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'ephemeris_sets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/ephemerisset/count',
};

export const tool: Tool = {
  name: 'count_ephemeris_sets',
  description:
    'Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
      pointEndTime: {
        type: 'string',
        description:
          "(One or more of fields 'pointEndTime, pointStartTime' are required.) End time/last time point of the ephemeris, in ISO 8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)",
        format: 'date-time',
      },
      pointStartTime: {
        type: 'string',
        description:
          "(One or more of fields 'pointEndTime, pointStartTime' are required.) Start time/first time point of the ephemeris, in ISO 8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)",
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.ephemerisSets.count(body);
};

export default { metadata, tool, handler };
