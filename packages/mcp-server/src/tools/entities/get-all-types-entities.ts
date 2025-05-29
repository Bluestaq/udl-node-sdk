// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'entities',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/entity/getAllTypes',
};

export const tool: Tool = {
  name: 'get_all_types_entities',
  description: 'Retrieves all distinct entity types.',
  inputSchema: {
    type: 'object',
    properties: {
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
  return client.entities.getAllTypes(body);
};

export default { metadata, tool, handler };
