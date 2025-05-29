// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'location',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/location/{id}',
};

export const tool: Tool = {
  name: 'delete_location',
  description:
    'Service operation to delete a location object specified by the passed ID path parameter. Locations are specific fixed points on the earth and are used to denote the locations of fixed sensors, operating units, etc. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
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
  return client.location.delete(id);
};

export default { metadata, tool, handler };
