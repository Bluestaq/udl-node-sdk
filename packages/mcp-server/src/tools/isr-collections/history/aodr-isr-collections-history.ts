// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'isr_collections.history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/isrcollection/history/aodr',
};

export const tool: Tool = {
  name: 'aodr_isr_collections_history',
  description:
    'Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation, then write that data to the Secure Content Store. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      createdAt: {
        type: 'string',
        description:
          'Time the row was created in the database, auto-populated by the system. (YYYY-MM-DDTHH:MM:SS.sssZ)',
        format: 'date',
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
      notification: {
        type: 'string',
        description:
          'optional, notification method for the created file link. When omitted, EMAIL is assumed. Current valid values are: EMAIL, SMS.',
      },
      outputDelimiter: {
        type: 'string',
        description:
          "optional, field delimiter when the created file is not JSON. Must be a single character chosen from this set: (',', ';', ':', '|'). When omitted, \",\" is used. It is strongly encouraged that your field delimiter be a character unlikely to occur within the data.",
      },
      outputFormat: {
        type: 'string',
        description:
          'optional, output format for the file. When omitted, JSON is assumed. Current valid values are: JSON and CSV.',
      },
    },
    required: ['createdAt'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.isrCollections.history.aodr(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
