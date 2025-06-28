// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'engines',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/engine/{id}',
};

export const tool: Tool = {
  name: 'delete_engines',
  description:
    'Service operation to delete a Engine object specified by the passed ID path parameter. An Engine represents launch engine/booster information to include performance characteristics and limits.  A launch vehicle has 1 to many engines per stage. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.engines.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
