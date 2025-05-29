// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'ephemeris.attitude_data',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/attitudedata',
};

export const tool: Tool = {
  name: 'list_ephemeris_attitude_data',
  description:
    'Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      asId: {
        type: 'string',
        description: 'Unique identifier of the parent AttitudeSet associated with this record. (uuid)',
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
  return client.ephemeris.attitudeData.list(body);
};

export default { metadata, tool, handler };
