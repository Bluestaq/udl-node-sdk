// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.notifications.offset',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/scs/notifications/offsets',
};

export const tool: Tool = {
  name: 'get_notifications_scs_offset',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve the min and max offsets of the SCS Event Notification Kafka topic.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/offset_get_response',\n  $defs: {\n    offset_get_response: {\n      type: 'object',\n      properties: {\n        maxOffset: {\n          type: 'integer',\n          description: 'The maximum (latest) Kafka offset for this topic.'\n        },\n        minOffset: {\n          type: 'integer',\n          description: 'The minimum (oldest) Kafka offset for this topic.'\n        }\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.scs.notifications.offset.get()));
  } catch (error) {
    if (error instanceof Unifieddatalibrary.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
