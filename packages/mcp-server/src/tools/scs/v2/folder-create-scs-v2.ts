// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.v2',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/scs/v2/folder',
};

export const tool: Tool = {
  name: 'folder_create_scs_v2',
  description:
    "Creates all folders in provided path that don't exist. Can be used to create a single folder or a new folder structure. Provided classificationMarking, description, writeAcl, readAcl, and tags are applied to the deepest folder in the provided path. If parent folders are created by this request, each parent folder will be created with the same classificationMarking and tags. A specific role is required to perform this service operation. Please contact the UDL team for assistance.",
  inputSchema: {
    type: 'object',
    properties: {
      path: {
        type: 'string',
        description:
          "Path to create. Will attempt to create all folders in the path that do not exist. Must start and end with '/'.",
      },
      sendNotification: {
        type: 'boolean',
        description: 'Whether or not to send a notification that this folder was created.',
      },
      id: {
        type: 'string',
        description: 'Unique identifier for document.',
      },
      attachment: {
        type: 'object',
        description: 'Additional metadata associated with this document.',
        properties: {
          author: {
            type: 'string',
            description: 'The creator of this document. Can be a person or a software entity.',
          },
          content_length: {
            type: 'integer',
            description: 'The length of the document, in bytes.',
          },
          content_type: {
            type: 'string',
            description: "The document's MIME-type (if applicable).",
          },
          date: {
            type: 'string',
            description: 'The time at which this attachment was created, represented in UTC ISO format.',
          },
          keywords: {
            type: 'string',
            description:
              'Any keywords associated with this document. Only applicable to files whose contents are indexed (e.g. text files, PDFs).',
          },
          language: {
            type: 'string',
            description: 'The human language of the document, if discernible.',
          },
          title: {
            type: 'string',
            description: 'The title of the document.',
          },
        },
      },
      classificationMarking: {
        type: 'string',
        description: 'Classification marking of the folder or file in IC/CAPCO portion-marked format.',
      },
      createdAt: {
        type: 'string',
        description: 'The time at which this document was created, represented in UTC ISO format.',
      },
      createdBy: {
        type: 'string',
        description: 'The creator of this document. Can be a person or a software entity.',
      },
      deleteOn: {
        type: 'integer',
        description:
          'Time at which this document should be automatically deleted. Represented in milliseconds since Unix epoch.',
      },
      description: {
        type: 'string',
        description: 'Optional description for the file or folder.',
      },
      filename: {
        type: 'string',
        description: 'The name of this document. Applicable to files and folders.',
      },
      filePath: {
        type: 'string',
        description: 'The absolute path to this document.',
      },
      keywords: {
        type: 'string',
        description:
          'Optional. Any keywords associated with this document. Only applicable to files whose contents are indexed (e.g. text files, PDFs).',
      },
      parentPath: {
        type: 'string',
        description:
          'The parent folder of this document. If this document is a root-level folder then the parent path is "/".',
      },
      pathType: {
        type: 'string',
        description: 'The type of this document.',
        enum: ['file', 'folder'],
      },
      readAcl: {
        type: 'string',
        description:
          'For folders only. Comma separated list of user and group ids that should have read access on this folder and the items nested in it.',
      },
      size: {
        type: 'integer',
        description: 'Size of this document in bytes.',
      },
      tags: {
        type: 'array',
        description:
          'Array of provider/source specific tags for this data, used for implementing data owner conditional access controls to restrict access to the data.',
        items: {
          type: 'string',
          description:
            'Each tag is a unique string used to associate this data with a specific provider or source.',
        },
      },
      updatedAt: {
        type: 'string',
        description:
          'The time at which this document was most recently updated, represented in UTC ISO format.',
      },
      updatedBy: {
        type: 'string',
        description: 'The person or software entity who updated this document most recently.',
      },
      writeAcl: {
        type: 'string',
        description:
          'For folders only. Comma separated list of user and group ids that should have write access on this folder and the items nested in it.',
      },
    },
    required: ['path'],
  },
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.scs.v2.folderCreate(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
