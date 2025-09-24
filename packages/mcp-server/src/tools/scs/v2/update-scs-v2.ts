// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.v2',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/scs/v2/update',
};

export const tool: Tool = {
  name: 'update_scs_v2',
  description:
    'Update folders and files. For a folder, you may update description, writeAcl, readAcl, classificationMarking, and tags. For a file, you may update description, classificationMarking, and tags. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      path: {
        type: 'string',
        description: 'The complete path for the object to be updated.',
      },
      sendNotification: {
        type: 'boolean',
        description: 'Whether or not to send a notification that the target file/folder was updated.',
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
  const response = await client.scs.v2.update(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
