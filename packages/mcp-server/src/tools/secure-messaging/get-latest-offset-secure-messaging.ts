// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'secure_messaging',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sm/getLatestOffset/{topic}',
};

export const tool: Tool = {
  name: 'get_latest_offset_secure_messaging',
  description: 'Returns the current/latest offset for the passed topic name.',
  inputSchema: {
    type: 'object',
    properties: {
      topic: {
        type: 'string',
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

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { topic, ...body } = args as any;
  return client.secureMessaging.getLatestOffset(topic, body);
};

export default { metadata, tool, handler };
