// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.file',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/scs/list',
};

export const tool: Tool = {
  name: 'list_scs_file',
  description:
    'Returns a non-recursive list of FileData objects representing the files and subdirectories in the passed-in path directory that are visible to the calling user.',
  inputSchema: {
    type: 'object',
    properties: {
      path: {
        type: 'string',
        description: 'The base path to list',
      },
      count: {
        type: 'integer',
        description: 'Number of items per page',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
      offset: {
        type: 'integer',
        description: 'First result to return',
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.scs.file.list(body));
};

export default { metadata, tool, handler };
