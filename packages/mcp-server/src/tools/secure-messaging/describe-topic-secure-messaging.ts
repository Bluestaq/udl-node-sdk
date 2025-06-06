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
  httpPath: '/sm/describeTopic/{topic}',
};

export const tool: Tool = {
  name: 'describe_topic_secure_messaging',
  description: 'Retrieve the details of the specified topic or data type.',
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

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { topic, ...body } = args as any;
  return asTextContentResult(await client.secureMessaging.describeTopic(topic, body));
};

export default { metadata, tool, handler };
