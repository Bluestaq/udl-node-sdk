// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'air_operations.aircraft_sortie',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/aircraftsortie/history/count',
};

export const tool: Tool = {
  name: 'history_count_air_operations_aircraft_sortie',
  description:
    'Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      plannedDepTime: {
        type: 'string',
        description:
          'The scheduled time that the Aircraft sortie is planned to depart, in ISO 8601 UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)',
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
  return asTextContentResult(await client.airOperations.aircraftSortie.historyCount(body));
};

export default { metadata, tool, handler };
