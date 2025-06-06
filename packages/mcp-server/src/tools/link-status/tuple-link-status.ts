// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'link_status',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/linkstatus/tuple',
};

export const tool: Tool = {
  name: 'tuple_link_status',
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
      createdAt: {
        type: 'string',
        description:
          "(One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.) Time the row was created in the database, auto-populated by the system. (YYYY-MM-DDTHH:MM:SS.sssZ)",
        format: 'date',
      },
      firstResult: {
        type: 'integer',
      },
      linkStartTime: {
        type: 'string',
        description:
          "(One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.) The link establishment time, or the time that the link becomes available for use, in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)",
        format: 'date-time',
      },
      linkStopTime: {
        type: 'string',
        description:
          "(One or more of fields 'createdAt, linkStartTime, linkStopTime' are required.) The link termination time, or the time that the link becomes unavailable for use, in ISO8601 UTC format. (YYYY-MM-DDTHH:MM:SS.ssssssZ)",
        format: 'date-time',
      },
      maxResults: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.linkStatus.tuple(body));
};

export default { metadata, tool, handler };
