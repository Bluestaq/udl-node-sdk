// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'air_operations.crewpapers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/filedrop/crewpapers',
  operationId: 'filedrop_udl_crewPapers_post_id',
};

export const tool: Tool = {
  name: 'upload_pdf_air_operations_crewpapers',
  description:
    'Service operation to upload a supporting PDF for the aircraft sortie. A specific role is required to perform this service operation. Please contact the UDL team for assistance.\n',
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
  const response = await client.airOperations.crewpapers.uploadPdf(file_content).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
