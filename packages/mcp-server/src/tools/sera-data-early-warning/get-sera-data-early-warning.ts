// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'sera_data_early_warning',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/seradataearlywarning/{id}',
};

export const tool: Tool = {
  name: 'get_sera_data_early_warning',
  description:
    'Service operation to get a single SeradataEarlyWarning by its unique ID passed as a path parameter.',
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
  return asTextContentResult(await client.seraDataEarlyWarning.get(id, body));
};

export default { metadata, tool, handler };
