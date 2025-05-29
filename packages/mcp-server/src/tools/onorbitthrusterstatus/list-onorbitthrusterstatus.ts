// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'onorbitthrusterstatus',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/onorbitthrusterstatus',
};

export const tool: Tool = {
  name: 'list_onorbitthrusterstatus',
  description:
    'Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
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

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.onorbitthrusterstatus.list(body);
};

export default { metadata, tool, handler };
