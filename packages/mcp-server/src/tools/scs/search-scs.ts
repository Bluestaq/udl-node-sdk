// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/scs/search',
};

export const tool: Tool = {
  name: 'search_scs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSearch for files by metadata and/or text in file content.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/sc_search_response',\n  $defs: {\n    sc_search_response: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/file_data'\n      }\n    },\n    file_data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            classification: {\n              type: 'string'\n            },\n            classificationMarking: {\n              type: 'string'\n            },\n            createdBy: {\n              type: 'string'\n            },\n            createdDate: {\n              type: 'string'\n            },\n            deleteOn: {\n              type: 'integer'\n            },\n            description: {\n              type: 'string'\n            },\n            docTitle: {\n              type: 'string'\n            },\n            docType: {\n              type: 'string'\n            },\n            doi: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            },\n            ellipseLat: {\n              type: 'number'\n            },\n            ellipseLon: {\n              type: 'number'\n            },\n            fileName: {\n              type: 'string'\n            },\n            intrinsicTitle: {\n              type: 'string'\n            },\n            keywords: {\n              type: 'string'\n            },\n            mediaTitle: {\n              type: 'string'\n            },\n            metaInfo: {\n              type: 'string'\n            },\n            milgrid: {\n              type: 'string'\n            },\n            milgridLat: {\n              type: 'number'\n            },\n            milgridLon: {\n              type: 'number'\n            },\n            modifiedBy: {\n              type: 'string'\n            },\n            modifiedDate: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            },\n            path: {\n              type: 'string'\n            },\n            read: {\n              type: 'string'\n            },\n            searchable: {\n              type: 'boolean'\n            },\n            searchAfter: {\n              type: 'string'\n            },\n            serialNumber: {\n              type: 'string'\n            },\n            size: {\n              type: 'integer'\n            },\n            tags: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            },\n            write: {\n              type: 'string'\n            }\n          }\n        },\n        targetName: {\n          type: 'string'\n        },\n        targetPath: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'file',\n            'folder',\n            'summary'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      path: {
        type: 'string',
        description: 'The path to search from',
      },
      count: {
        type: 'integer',
        description: 'Number of items per page',
      },
      offset: {
        type: 'integer',
        description: 'First result to return',
      },
      contentCriteria: {
        type: 'string',
      },
      metaDataCriteria: {
        type: 'object',
        additionalProperties: true,
      },
      nonRangeCriteria: {
        type: 'object',
        additionalProperties: true,
      },
      rangeCriteria: {
        type: 'object',
        additionalProperties: true,
      },
      searchAfter: {
        type: 'string',
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
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.scs.search(body)));
};

export default { metadata, tool, handler };
