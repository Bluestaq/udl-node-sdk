// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/scs/rename',
};

export const tool: Tool = {
  name: 'rename_scs',
  description:
    'Operation to rename folders or files. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The path of the item to rename.',
      },
      newName: {
        type: 'string',
        description: 'The new name for the file or folder. Do not include the path.',
      },
    },
    required: ['id', 'newName'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.scs.rename(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
