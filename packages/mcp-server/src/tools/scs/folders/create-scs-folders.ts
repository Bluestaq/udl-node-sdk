// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
    'Creates a new folder that is passed as part of the path. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
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
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.scs.folders.create(body));
};

export default { metadata, tool, handler };
