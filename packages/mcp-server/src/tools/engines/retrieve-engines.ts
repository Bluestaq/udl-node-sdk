// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'engines',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/engine/{id}',
};

export const tool: Tool = {
  name: 'retrieve_engines',
  description:
    'Service operation to get a single Engine record by its unique ID passed as a path parameter. An Engine represents launch engine/booster information to include performance characteristics and limits.  A launch vehicle has 1 to many engines per stage.',
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

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.engines.retrieve(id, body));
};

export default { metadata, tool, handler };
