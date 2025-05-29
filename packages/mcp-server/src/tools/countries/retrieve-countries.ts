// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'countries',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/country/{code}',
};

export const tool: Tool = {
  name: 'retrieve_countries',
  description:
    'Service operation to get a single Country record by its unique code passed as a path parameter.',
  inputSchema: {
    type: 'object',
    properties: {
      code: {
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
  const { code, ...body } = args as any;
  return client.countries.retrieve(code, body);
};

export default { metadata, tool, handler };
