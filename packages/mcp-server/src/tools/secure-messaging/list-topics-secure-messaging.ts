// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve the list of available secure messaging topics or data types available.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/secure_messaging_list_topics_response',\n  $defs: {\n    secure_messaging_list_topics_response: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/topic_details'\n      }\n    },\n    topic_details: {\n      type: 'object',\n      properties: {\n        description: {\n          type: 'string',\n          description: 'A description of the data content of this topic.'\n        },\n        maxPos: {\n          type: 'integer',\n          description: 'The maximum (latest) kafka offset for this topic.'\n        },\n        minPos: {\n          type: 'integer',\n          description: 'The minimum (oldest) kafka offset for this topic.'\n        },\n        topic: {\n          type: 'string',\n          description: 'The name of the topic in kafka.'\n        },\n        udlOpenAPISchema: {\n          type: 'string',\n          description: 'The UDL schema that the objects in this topic apply to.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.secureMessaging.listTopics()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
