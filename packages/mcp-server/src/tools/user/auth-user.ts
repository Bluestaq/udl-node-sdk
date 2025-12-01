// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'user',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/basicAuth',
};

export const tool: Tool = {
  name: 'auth_user',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieve authentication details for the current user\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user_auth_response',\n  $defs: {\n    user_auth_response: {\n      type: 'object',\n      properties: {\n        auth: {\n          type: 'boolean',\n          description: 'Authentication status'\n        },\n        roles: {\n          type: 'array',\n          description: 'List of user roles',\n          items: {\n            type: 'string'\n          }\n        },\n        sub: {\n          type: 'string',\n          description: 'Subject identifier'\n        }\n      },\n      required: [        'auth',\n        'roles',\n        'sub'\n      ]\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.user.auth()));
  } catch (error) {
    if (error instanceof Unifieddatalibrary.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
