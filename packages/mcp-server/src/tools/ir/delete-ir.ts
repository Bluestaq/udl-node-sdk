// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'ir',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/ir/{id}',
};

export const tool: Tool = {
  name: 'delete_ir',
  description:
    'Service operation to delete a IR object specified by the passed ID path parameter. An IR is an on-orbit infrared payload. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
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
  await client.ir.delete(id);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
