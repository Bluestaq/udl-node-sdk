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
  httpPath: '/sm/getMessages/{topic}/{offset}',
};

export const tool: Tool = {
  name: 'get_messages_secure_messaging',
  description:
    'Retrieve a set of messages from the given topic at the given offset. See Help > Secure Messaging API on Storefront for more details on how to use getMessages.',
  inputSchema: {
    type: 'object',
    properties: {
      topic: {
        type: 'string',
      },
      offset: {
        type: 'integer',
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
  const { offset, ...body } = args as any;
  await client.secureMessaging.getMessages(offset, body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
