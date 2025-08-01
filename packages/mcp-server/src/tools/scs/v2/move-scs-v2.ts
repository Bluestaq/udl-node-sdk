// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.v2',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/scs/v2/move',
};

export const tool: Tool = {
  name: 'move_scs_v2',
  description:
    'Operation to move or rename a folder or file. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      fromPath: {
        type: 'string',
        description: "The path of the file or folder to move or rename. Must start with '/'.",
      },
      toPath: {
        type: 'string',
        description:
          "The destination path of the file or folder after moving or renaming. Must start with '/'.",
      },
    },
    required: ['fromPath', 'toPath'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.scs.v2.move(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
