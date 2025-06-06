// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'air_operations.air_tasking_orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/airtaskingorder/{id}',
};

export const tool: Tool = {
  name: 'retrieve_air_operations_air_tasking_orders',
  description:
    'Service operation to get a single airtaskingorder record by its unique ID passed as a path parameter.',
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
  return asTextContentResult(await client.airOperations.airTaskingOrders.retrieve(id, body));
};

export default { metadata, tool, handler };
