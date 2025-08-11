// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
      file_content: {
        type: 'string',
      },
    },
    required: ['file_content'],
  },
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { file_content, ...body } = args as any;
  const response = await client.scs.v2.fileUpload(file_content).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
