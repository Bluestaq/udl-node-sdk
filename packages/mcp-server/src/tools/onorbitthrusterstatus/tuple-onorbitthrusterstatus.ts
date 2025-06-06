// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'onorbitthrusterstatus',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/onorbitthrusterstatus/tuple',
};

export const tool: Tool = {
  name: 'tuple_onorbitthrusterstatus',
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
      idOnorbitThruster: {
        type: 'string',
        description:
          "(One or more of fields 'idOnorbitThruster, statusTime' are required.) ID of the associated OnorbitThruster record. This ID can be used to obtain additional information on an onorbit thruster object using the 'get  by ID' operation (e.g. /udl/onorbitthruster/{id}). For example, the OnorbitThruster object with idOnorbitThruster = abc would be queried as /udl/onorbitthruster/abc.",
      },
      maxResults: {
        type: 'integer',
      },
      statusTime: {
        type: 'string',
        description:
          "(One or more of fields 'idOnorbitThruster, statusTime' are required.) Datetime of the thruster status observation in ISO 8601 UTC datetime format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)",
        format: 'date-time',
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.onorbitthrusterstatus.tuple(body));
};

export default { metadata, tool, handler };
