// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

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
    'operation to update files metadata. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      fileDataList: {
        type: 'array',
        items: {
          $ref: '#/$defs/file_data',
        },
      },
    },
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
            required: [],
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
        required: [],
      },
    },
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.scs.file.update(body);
};

export default { metadata, tool, handler };
