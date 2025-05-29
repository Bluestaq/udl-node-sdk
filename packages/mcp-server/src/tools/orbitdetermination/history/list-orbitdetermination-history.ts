// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'orbitdetermination.history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/orbitdetermination/history',
};

export const tool: Tool = {
  name: 'list_orbitdetermination_history',
  description:
    'Service operation to dynamically query historical data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      columns: {
        type: 'string',
        description:
          'optional, fields for retrieval. When omitted, ALL fields are assumed. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid query fields that can be selected.',
      },
      firstResult: {
        type: 'integer',
      },
      idOnOrbit: {
        type: 'string',
        description:
          "(One or more of fields 'idOnOrbit, startTime' are required.) Unique identifier of the target satellite on-orbit object. This ID can be used to obtain additional information on an OnOrbit object using the 'get by ID' operation (e.g. /udl/onorbit/{id}). For example, the OnOrbit with idOnOrbit = 25544 would be queried as /udl/onorbit/25544.",
      },
      maxResults: {
        type: 'integer',
      },
      startTime: {
        type: 'string',
        description:
          "(One or more of fields 'idOnOrbit, startTime' are required.) Start time for OD solution in ISO 8601 UTC datetime format, with microsecond precision. (YYYY-MM-DDTHH:MM:SS.ssssssZ)",
        format: 'date-time',
      },
    },
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.orbitdetermination.history.list(body);
};

export default { metadata, tool, handler };
