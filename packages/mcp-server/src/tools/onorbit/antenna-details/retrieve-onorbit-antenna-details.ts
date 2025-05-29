// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'onorbit.antenna_details',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/antennadetails/{id}',
};

export const tool: Tool = {
  name: 'retrieve_onorbit_antenna_details',
  description:
    'Service operation to get a single AntennaDetails record by its unique ID passed as a path parameter. An antenna may have multiple details records compiled by various sources.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
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
  const { id, ...body } = args as any;
  return client.onorbit.antennaDetails.retrieve(id, body);
};

export default { metadata, tool, handler };
