// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'sgi',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/sgi',
};

export const tool: Tool = {
  name: 'list_sgi',
  description:
    'Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      effectiveDate: {
        type: 'string',
        description:
          "(One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time the data was received and processed from the source. Typically a source provides solar data for a date window with each transmission including past, present, and future predicted values. (YYYY-MM-DDTHH:MM:SS.sssZ)",
        format: 'date-time',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
      sgiDate: {
        type: 'string',
        description:
          "(One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time of the index value. This could be a past, current, or future predicted value. Note: sgiDate defines the start time of the time window for this data record. (YYYY-MM-DDTHH:MM:SS.sssZ)",
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
  const response = await client.sgi.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
