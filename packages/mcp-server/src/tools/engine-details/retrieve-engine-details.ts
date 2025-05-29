// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'engine_details',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/enginedetails/{id}',
};

export const tool: Tool = {
  name: 'retrieve_engine_details',
  description:
    'Service operation to get a single EngineDetails record by its unique ID passed as a path parameter. EngineDetails are launch vehicle engine details and performance characteristics/limits compiled by a particular source.  A launch vehicle engine may have several details records from multiple sources.',
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
  return client.engineDetails.retrieve(id, body);
};

export default { metadata, tool, handler };
