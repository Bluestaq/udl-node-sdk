// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'event_evolution',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/eventevolution/count',
};

export const tool: Tool = {
  name: 'count_event_evolution',
  description:
    'Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      eventId: {
        type: 'string',
        description:
          "(One or more of fields 'eventId, startTime' are required.) User-provided unique identifier of this activity or event. This ID should remain the same on subsequent updates in order to associate all records pertaining to the activity or event.",
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
      startTime: {
        type: 'string',
        description:
          "(One or more of fields 'eventId, startTime' are required.) The actual or estimated start time of the activity or event, in ISO 8601 UTC format. (YYYY-MM-DDTHH:MM:SS.sssZ)",
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.eventEvolution.count(body);
};

export default { metadata, tool, handler };
