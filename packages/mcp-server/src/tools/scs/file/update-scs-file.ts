// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'udl-node-sdk';

export const metadata: Metadata = {
  resource: 'scs.file',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/scs/file',
};

export const tool: Tool = {
  name: 'update_scs_file',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\noperation to update files metadata. A specific role is required to perform this service operation. Please contact the UDL team for assistance.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      fileDataList: {
        type: 'array',
        items: {
          $ref: '#/$defs/file_data',
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
    $defs: {
      file_data: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          attributes: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
              },
              classification: {
                type: 'string',
              },
              classificationMarking: {
                type: 'string',
              },
              createdBy: {
                type: 'string',
              },
              createdDate: {
                type: 'string',
              },
              deleteOn: {
                type: 'integer',
              },
              description: {
                type: 'string',
              },
              docTitle: {
                type: 'string',
              },
              docType: {
                type: 'string',
              },
              doi: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              ellipseLat: {
                type: 'number',
              },
              ellipseLon: {
                type: 'number',
              },
              fileName: {
                type: 'string',
              },
              intrinsicTitle: {
                type: 'string',
              },
              keywords: {
                type: 'string',
              },
              mediaTitle: {
                type: 'string',
              },
              metaInfo: {
                type: 'string',
              },
              milgrid: {
                type: 'string',
              },
              milgridLat: {
                type: 'number',
              },
              milgridLon: {
                type: 'number',
              },
              modifiedBy: {
                type: 'string',
              },
              modifiedDate: {
                type: 'string',
              },
              name: {
                type: 'string',
              },
              path: {
                type: 'string',
              },
              read: {
                type: 'string',
              },
              searchable: {
                type: 'boolean',
              },
              searchAfter: {
                type: 'string',
              },
              serialNumber: {
                type: 'string',
              },
              size: {
                type: 'integer',
              },
              tags: {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
              write: {
                type: 'string',
              },
            },
          },
          contentAction: {
            type: 'string',
            enum: ['UPDATE', 'COPY', 'MOVE'],
          },
          targetName: {
            type: 'string',
          },
          targetPath: {
            type: 'string',
          },
          type: {
            type: 'string',
            enum: ['file', 'folder', 'summary'],
          },
        },
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.scs.file.update(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
