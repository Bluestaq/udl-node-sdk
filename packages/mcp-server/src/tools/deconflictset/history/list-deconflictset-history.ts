// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'deconflictset.history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/deconflictset/history',
};

export const tool: Tool = {
  name: 'list_deconflictset_history',
  description:
    'Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      eventStartTime: {
        type: 'string',
        description:
          'The start time of the event associated with the set of DeconflictWindow records, in ISO 8601 UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)',
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
    required: ['eventStartTime'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.deconflictset.history.list(body).asResponse();
  try {
    return asTextContentResult(await response.json());
  } catch (error) {
    if (error instanceof Unifieddatalibrary.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
