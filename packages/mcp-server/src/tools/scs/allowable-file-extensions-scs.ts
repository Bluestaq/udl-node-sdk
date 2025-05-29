// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/scs/allowableFileExtensions',
};

export const tool: Tool = {
  name: 'allowable_file_extensions_scs',
  description: 'Returns a list of allowable file extensions for upload.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return client.scs.allowableFileExtensions();
};

export default { metadata, tool, handler };
