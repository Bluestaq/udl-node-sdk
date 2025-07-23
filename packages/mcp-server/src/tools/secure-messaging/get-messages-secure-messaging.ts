// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve a set of messages from the given topic at the given offset. See Help > Secure Messaging API on Storefront for more details on how to use getMessages.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['topic', 'offset'],
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { offset, ...body } = args as any;
  const response = await client.secureMessaging.getMessages(offset, body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
