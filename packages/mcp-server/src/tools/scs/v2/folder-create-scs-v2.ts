// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
      classificationMarking: {
        type: 'string',
        description: 'Classification marking of the folder or file in IC/CAPCO portion-marked format.',
      },
      deleteOn: {
        type: 'integer',
      },
      description: {
        type: 'string',
        description: 'Optional description for the file or folder.',
      },
      readAcl: {
        type: 'string',
        description:
          'For folders only. Comma separated list of user and group ids that should have read access on this folder and the items nested in it.',
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
      writeAcl: {
        type: 'string',
        description:
          'For folders only. Comma separated list of user and group ids that should have write access on this folder and the items nested in it.',
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  await client.scs.v2.folderCreate(body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
