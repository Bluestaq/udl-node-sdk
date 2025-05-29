// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/scs/updateTagsForFilesInFolder',
};

export const tool: Tool = {
  name: 'update_tags_scs',
  description: 'Updates tags for given folder.',
  inputSchema: {
    type: 'object',
    properties: {
      folder: {
        type: 'string',
        description: 'The base path to folder',
      },
      tags: {
        type: 'string',
        description: 'The new tag',
      },
    },
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.scs.updateTags(body);
};

export default { metadata, tool, handler };
