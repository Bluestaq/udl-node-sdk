// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'tai_utc',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/taiutc',
};

export const tool: Tool = {
  name: 'list_tai_utc',
  description:
    'Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      adjustmentDate: {
        type: 'string',
        description:
          'Effective date/time for the leap second adjustment. Must be a unique value across all TAIUTC datasets. (YYYY-MM-DDTHH:MM:SS.sssZ)',
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
  return client.taiUtc.list(body);
};

export default { metadata, tool, handler };
