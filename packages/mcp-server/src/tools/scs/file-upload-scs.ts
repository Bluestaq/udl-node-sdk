// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/scs/file',
};

export const tool: Tool = {
  name: 'file_upload_scs',
  description:
    'Operation to upload a file. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      classificationMarking: {
        type: 'string',
        description: 'Classification (ex. U//FOUO)',
      },
      fileName: {
        type: 'string',
        description: 'FileName (ex. dog.jpg)',
      },
      path: {
        type: 'string',
        description: 'The base path to upload file (ex. images)',
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
        description: 'Description ',
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

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.scs.fileUpload(body);
};

export default { metadata, tool, handler };
