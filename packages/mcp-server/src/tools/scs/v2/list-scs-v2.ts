// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.v2',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/scs/v2/list',
};

export const tool: Tool = {
  name: 'list_scs_v2',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a list of ScsEntity objects, each directly nested under the provided path.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/scs_entity'\n  },\n  $defs: {\n    scs_entity: {\n      type: 'object',\n      description: 'An SCS file or folder.',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        attachment: {\n          $ref: '#/$defs/attachment'\n        },\n        classificationMarking: {\n          type: 'string',\n          description: 'Classification marking of the folder or file in IC/CAPCO portion-marked format.'\n        },\n        createdAt: {\n          type: 'string'\n        },\n        createdBy: {\n          type: 'string'\n        },\n        data: {\n          type: 'string'\n        },\n        deleteOn: {\n          type: 'integer'\n        },\n        description: {\n          type: 'string',\n          description: 'Optional description for the file or folder.'\n        },\n        filename: {\n          type: 'string'\n        },\n        filePath: {\n          type: 'string'\n        },\n        keywords: {\n          type: 'string'\n        },\n        parentPath: {\n          type: 'string'\n        },\n        pathType: {\n          type: 'string'\n        },\n        readAcl: {\n          type: 'string',\n          description: 'For folders only. Comma separated list of user and group ids that should have read access on this folder and the items nested in it.'\n        },\n        size: {\n          type: 'integer'\n        },\n        tags: {\n          type: 'array',\n          description: 'Array of provider/source specific tags for this data, used for implementing data owner conditional access controls to restrict access to the data.',\n          items: {\n            type: 'string',\n            description: 'Each tag is a unique string used to associate this data with a specific provider or source.'\n          }\n        },\n        updatedAt: {\n          type: 'string'\n        },\n        updatedBy: {\n          type: 'string'\n        },\n        writeAcl: {\n          type: 'string',\n          description: 'For folders only. Comma separated list of user and group ids that should have write access on this folder and the items nested in it.'\n        }\n      }\n    },\n    attachment: {\n      type: 'object',\n      properties: {\n        author: {\n          type: 'string'\n        },\n        content: {\n          type: 'string'\n        },\n        content_length: {\n          type: 'integer'\n        },\n        content_type: {\n          type: 'string'\n        },\n        date: {\n          type: 'string'\n        },\n        keywords: {\n          type: 'string'\n        },\n        language: {\n          type: 'string'\n        },\n        title: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      path: {
        type: 'string',
        description: 'The base path to list',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
      order: {
        type: 'string',
        description: 'The order in which entries should be sorted',
      },
      searchAfter: {
        type: 'string',
        description:
          'The starting point for pagination results, usually set to the value of the SEARCH_AFTER header returned in the previous request.',
      },
      size: {
        type: 'integer',
        description: 'The number of results to retrieve.',
      },
      sort: {
        type: 'string',
        description: 'The field on which to sort entries',
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
  const response = await client.scs.v2.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
