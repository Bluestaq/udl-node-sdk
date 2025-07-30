// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'udl-node-sdk';

export const metadata: Metadata = {
  resource: 'navigational_obstruction',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/navigationalobstruction',
};

export const tool: Tool = {
  name: 'list_navigational_obstruction',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.",
  inputSchema: {
    type: 'object',
    properties: {
      cycleDate: {
        type: 'string',
        description:
          "(One or more of fields 'cycleDate, obstacleId' are required.) Start date of this obstruction data set's currency, in ISO 8601 date-only format. (YYYY-MM-DD)",
        format: 'date',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
      obstacleId: {
        type: 'string',
        description: "(One or more of fields 'cycleDate, obstacleId' are required.) The ID of this obstacle.",
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
  const response = await client.navigationalObstruction.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
