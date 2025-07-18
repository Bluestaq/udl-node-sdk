// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'ephemeris_sets.history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/ephemerisset/history',
};

export const tool: Tool = {
  name: 'list_ephemeris_sets_history',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.",
  inputSchema: {
    type: 'object',
    properties: {
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
    required: [],
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.ephemerisSets.history.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
