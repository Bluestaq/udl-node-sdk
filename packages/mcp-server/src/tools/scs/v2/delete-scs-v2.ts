// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.v2',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/scs/v2/delete',
};

export const tool: Tool = {
  name: 'delete_scs_v2',
  description:
    'Operation to delete a folder or file. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      path: {
        type: 'string',
        description: "The complete path for the object to be deleted. Must start with '/'.",
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.scs.v2.delete(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
