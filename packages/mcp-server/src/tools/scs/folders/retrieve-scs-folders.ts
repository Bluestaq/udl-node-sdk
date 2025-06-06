// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.folders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/scs/folder',
};

export const tool: Tool = {
  name: 'retrieve_scs_folders',
  description: 'Returns a FileData object representing the folder ID that is visible to the calling user.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The folder ID',
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
  const body = args as any;
  return asTextContentResult(await client.scs.folders.retrieve(body));
};

export default { metadata, tool, handler };
