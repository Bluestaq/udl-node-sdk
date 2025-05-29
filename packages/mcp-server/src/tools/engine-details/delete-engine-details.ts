// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'engine_details',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/enginedetails/{id}',
};

export const tool: Tool = {
  name: 'delete_engine_details',
  description:
    'Service operation to delete a EngineDetails object specified by the passed ID path parameter. EngineDetails are launch vehicle engine details and performance characteristics/limits compiled by a particular source.  A launch vehicle engine may have several details records from multiple sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
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
  return client.engineDetails.delete(id);
};

export default { metadata, tool, handler };
