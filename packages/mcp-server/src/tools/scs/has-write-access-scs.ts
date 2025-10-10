// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/scs/userHasWriteAccess',
};

export const tool: Tool = {
  name: 'has_write_access_scs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns true if a user has write access to the specified folder.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sc_has_write_access_response',\n  $defs: {\n    sc_has_write_access_response: {\n      type: 'boolean'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      path: {
        type: 'string',
        description: 'Folder path for which to check user write access.',
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
    required: ['path'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.scs.hasWriteAccess(body)));
};

export default { metadata, tool, handler };
