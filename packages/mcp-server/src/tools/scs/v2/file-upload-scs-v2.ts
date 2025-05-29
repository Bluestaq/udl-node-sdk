// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.v2',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/scs/v2/file',
};

export const tool: Tool = {
  name: 'file_upload_scs_v2',
  description:
    'Operation to upload a file. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      classificationMarking: {
        type: 'string',
        description:
          'Classification marking of uploaded document. If folders are created, they will also have this classification marking.',
      },
      path: {
        type: 'string',
        description:
          "The complete path for the upload including filename. Will attempt to create folders in path if necessary. Must start with '/'.",
      },
      body: {
        type: 'string',
      },
      description: {
        type: 'string',
        description: 'Optional description of uploaded document.',
      },
      overwrite: {
        type: 'boolean',
        description: 'Whether or not to overwrite a file with the same name and path, if one exists.',
      },
      tags: {
        type: 'string',
        description:
          'Optional array of provider/source specific tags for this data, used for implementing data owner conditional access controls to restrict access to the data.',
      },
    },
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.scs.v2.fileUpload(body);
};

export default { metadata, tool, handler };
