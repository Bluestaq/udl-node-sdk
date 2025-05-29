// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'item_trackings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/itemtracking',
};

export const tool: Tool = {
  name: 'list_item_trackings',
  description:
    'Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      ts: {
        type: 'string',
        description:
          'The timestamp of the scan, in ISO 8601 UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)',
        format: 'date-time',
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
  return client.itemTrackings.list(body);
};

export default { metadata, tool, handler };
