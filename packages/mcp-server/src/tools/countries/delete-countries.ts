// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'countries',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/country/{code}',
};

export const tool: Tool = {
  name: 'delete_countries',
  description:
    'Service operation to delete a Country object specified by the passed code path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      code: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { code, ...body } = args as any;
  await client.countries.delete(code);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
