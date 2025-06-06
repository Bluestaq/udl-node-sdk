// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'tdoa_fdoa.diffofarrival',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/diffofarrival',
};

export const tool: Tool = {
  name: 'list_tdoa_fdoa_diffofarrival',
  description:
    'Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      obTime: {
        type: 'string',
        description:
          'Ob detection time in ISO 8601 UTC with microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)',
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

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.tdoaFdoa.diffofarrival.list(body));
};

export default { metadata, tool, handler };
