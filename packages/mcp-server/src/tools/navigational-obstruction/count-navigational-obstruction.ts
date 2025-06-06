// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'navigational_obstruction',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/navigationalobstruction/count',
};

export const tool: Tool = {
  name: 'count_navigational_obstruction',
  description:
    'Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
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
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.navigationalObstruction.count(body));
};

export default { metadata, tool, handler };
