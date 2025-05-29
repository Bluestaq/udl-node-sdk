// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'onorbit.antenna_details',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/antennadetails/{id}',
};

export const tool: Tool = {
  name: 'delete_onorbit_antenna_details',
  description:
    'Service operation to delete a AntennaDetails object specified by the passed ID path parameter. An antenna may have multiple details records compiled by various sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.onorbit.antennaDetails.delete(id);
};

export default { metadata, tool, handler };
