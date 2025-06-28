// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  const response = await client.scs.v2.update(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
