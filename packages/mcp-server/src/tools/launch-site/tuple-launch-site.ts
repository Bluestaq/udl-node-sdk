// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'launch_site',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/launchsite/tuple',
};

export const tool: Tool = {
  name: 'tuple_launch_site',
  description:
    "Service operation to dynamically query data and only return specified columns/fields. Requested columns are specified by the 'columns' query parameter and should be a comma separated list of valid fields for the specified data type. classificationMarking is always returned. See the queryhelp operation (/udl/<datatype>/queryhelp) for more details on valid/required query parameter information. An example URI: /udl/elset/tuple?columns=satNo,period&epoch=>now-5 hours would return the satNo and period of elsets with an epoch greater than 5 hours ago.",
  inputSchema: {
    type: 'object',
    properties: {
      columns: {
        type: 'string',
        description:
          'Comma-separated list of valid field names for this data type to be returned in the response. Only the fields specified will be returned as well as the classification marking of the data, if applicable. See the ‘queryhelp’ operation for a complete list of possible fields.',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
    },
    required: ['columns'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.launchSite.tuple(body));
};

export default { metadata, tool, handler };
