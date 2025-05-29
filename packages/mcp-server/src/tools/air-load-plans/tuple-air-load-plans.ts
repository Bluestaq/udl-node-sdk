// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'air_load_plans',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/airloadplan/tuple',
};

export const tool: Tool = {
  name: 'tuple_air_load_plans',
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
      estDepTime: {
        type: 'string',
        description:
          'The current estimated time that the aircraft is planned to depart, in ISO 8601 UTC format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)',
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

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.airLoadPlans.tuple(body);
};

export default { metadata, tool, handler };
