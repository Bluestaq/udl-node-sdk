// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.folders',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/scs/folder',
};

export const tool: Tool = {
  name: 'create_scs_folders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new folder that is passed as part of the path. A specific role is required to perform this service operation. Please contact the UDL team for assistance.\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'Path to create folder.',
      },
      classificationMarking: {
        type: 'string',
        description: 'Classification marking of the data in IC/CAPCO Portion-marked format.',
      },
      description: {
        type: 'string',
        description: 'Optional description to include on folder.',
      },
      read: {
        type: 'string',
        description: 'Comma separated list of user ids who can read contents of the folder.',
      },
      sendNotification: {
        type: 'boolean',
        description: 'Whether or not to send a notification that this folder was created.',
      },
      tags: {
        type: 'string',
        description: 'Comma separated list of tags to add to the folder.',
      },
      write: {
        type: 'string',
        description: 'Comma separated list of user ids who can write to the folder.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'classificationMarking'],
  },
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.scs.folders.create(body)));
};

export default { metadata, tool, handler };
