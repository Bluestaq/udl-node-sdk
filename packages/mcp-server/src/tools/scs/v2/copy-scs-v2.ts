// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.v2',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/scs/v2/copy',
};

export const tool: Tool = {
  name: 'copy_scs_v2',
  description:
    'Operation to copy a folder or file. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      fromPath: {
        type: 'string',
        description: "The path of the file or folder to copy. Must start with '/'.",
      },
      toPath: {
        type: 'string',
        description: "The destination path to copy to. Must start with '/'.",
      },
    },
    required: ['fromPath', 'toPath'],
  },
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.scs.v2.copy(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
