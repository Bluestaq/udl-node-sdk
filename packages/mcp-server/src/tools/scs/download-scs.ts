// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/scs/download',
};

export const tool: Tool = {
  name: 'download_scs',
  description: 'Downloads a zip of one or more files and/or folders.',
  inputSchema: {
    type: 'object',
    properties: {
      body: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
    },
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.scs.download(body);
};

export default { metadata, tool, handler };
