// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'secure_messaging',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sm/listTopics',
};

export const tool: Tool = {
  name: 'list_topics_secure_messaging',
  description: 'Retrieve the list of available secure messaging topics or data types available.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.secureMessaging.listTopics());
};

export default { metadata, tool, handler };
