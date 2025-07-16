// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'event_evolution.history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/eventevolution/history',
};

export const tool: Tool = {
  name: 'list_event_evolution_history',
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

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.eventEvolution.history.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
