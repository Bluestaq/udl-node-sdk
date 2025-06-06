// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.paths',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/scs/path',
};

export const tool: Tool = {
  name: 'create_scs_paths',
  description:
    'Creates the path and uploads file that is passed. If folder exist it will only create folders that are missing. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
        description: 'The full path to create, including path and file name',
      },
      classificationMarking: {
        type: 'string',
        description: 'Classification (ex. U//FOUO)',
      },
      body: {
        type: 'string',
      },
      deleteAfter: {
        type: 'string',
        description: 'Length of time after which to automatically delete the file.',
      },
      description: {
        type: 'string',
        description: 'Description',
      },
      overwrite: {
        type: 'boolean',
        description: 'Whether or not to overwrite a file with the same name and path, if one exists.',
      },
      sendNotification: {
        type: 'boolean',
        description: 'Whether or not to send a notification that this file was uploaded.',
      },
      tags: {
        type: 'string',
        description: 'Tags',
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.scs.paths.create(body));
};

export default { metadata, tool, handler };
