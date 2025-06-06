// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.file_metadata',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/scs/listFileMetadata',
};

export const tool: Tool = {
  name: 'list_scs_file_metadata',
  description: 'Returns a set of File Metadata that can be used for search endpoint.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.scs.fileMetadata.list());
};

export default { metadata, tool, handler };
