// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'stage',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/stage/{id}',
};

export const tool: Tool = {
  name: 'delete_stage',
  description:
    'Service operation to delete a Stage object specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance. A Stage represents various stages of a particular launch vehicle, compiled by a particular source. A vehicle may have multiple stage records.',
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
  await client.stage.delete(id);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
