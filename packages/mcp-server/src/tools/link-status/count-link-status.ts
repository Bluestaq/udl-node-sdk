// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'link_status',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/linkstatus/count',
};

export const tool: Tool = {
  name: 'count_link_status',
  description:
    'Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      createdAt: {
        type: 'string',
        description:
          "(One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.) Time the row was created in the database, auto-populated by the system. (YYYY-MM-DDTHH:MM:SS.sssZ)",
        format: 'date',
      },
      firstResult: {
        type: 'integer',
      },
      linkStartTime: {
        type: 'string',
        description:
          "(One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.) The link establishment time, or the time that the link becomes available for use, in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)",
        format: 'date-time',
      },
      linkStopTime: {
        type: 'string',
        description:
          "(One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.) The link termination time, or the time that the link becomes unavailable for use, in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)",
        format: 'date-time',
      },
      maxResults: {
        type: 'integer',
      },
    },
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.linkStatus.count(body);
};

export default { metadata, tool, handler };
