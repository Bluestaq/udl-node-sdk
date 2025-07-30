// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'udl-node-sdk';

export const metadata: Metadata = {
  resource: 'scs.file',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/scs/file',
};

export const tool: Tool = {
  name: 'retrieve_scs_file',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a FileData object representing the file with the given ID that is visible to the calling user.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/file_data',\n  $defs: {\n    file_data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            classification: {\n              type: 'string'\n            },\n            classificationMarking: {\n              type: 'string'\n            },\n            createdBy: {\n              type: 'string'\n            },\n            createdDate: {\n              type: 'string'\n            },\n            deleteOn: {\n              type: 'integer'\n            },\n            description: {\n              type: 'string'\n            },\n            docTitle: {\n              type: 'string'\n            },\n            docType: {\n              type: 'string'\n            },\n            doi: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            },\n            ellipseLat: {\n              type: 'number'\n            },\n            ellipseLon: {\n              type: 'number'\n            },\n            fileName: {\n              type: 'string'\n            },\n            intrinsicTitle: {\n              type: 'string'\n            },\n            keywords: {\n              type: 'string'\n            },\n            mediaTitle: {\n              type: 'string'\n            },\n            metaInfo: {\n              type: 'string'\n            },\n            milgrid: {\n              type: 'string'\n            },\n            milgridLat: {\n              type: 'number'\n            },\n            milgridLon: {\n              type: 'number'\n            },\n            modifiedBy: {\n              type: 'string'\n            },\n            modifiedDate: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            },\n            path: {\n              type: 'string'\n            },\n            read: {\n              type: 'string'\n            },\n            searchable: {\n              type: 'boolean'\n            },\n            searchAfter: {\n              type: 'string'\n            },\n            serialNumber: {\n              type: 'string'\n            },\n            size: {\n              type: 'integer'\n            },\n            tags: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            },\n            write: {\n              type: 'string'\n            }\n          }\n        },\n        contentAction: {\n          type: 'string',\n          enum: [            'UPDATE',\n            'COPY',\n            'MOVE'\n          ]\n        },\n        targetName: {\n          type: 'string'\n        },\n        targetPath: {\n          type: 'string'\n        },\n        type: {\n          type: 'string',\n          enum: [            'file',\n            'folder',\n            'summary'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The file ID to view',
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
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.scs.file.retrieve(body)));
};

export default { metadata, tool, handler };
