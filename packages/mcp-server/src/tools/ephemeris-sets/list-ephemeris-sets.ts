// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'ephemeris_sets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/ephemerisset',
};

export const tool: Tool = {
  name: 'list_ephemeris_sets',
  description:
    'Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
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
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.ephemerisSets.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
