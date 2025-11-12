// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'global_atmospheric_model',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/globalatmosphericmodel/getFile/{id}',
};

export const tool: Tool = {
  name: 'get_file_global_atmospheric_model',
  description:
    'Service operation to get a single GlobalAtmosphericModel compressed data file by its unique ID passed as a path parameter. The compressed data file is returned as an attachment Content-Disposition.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asBinaryContentResult(await client.globalAtmosphericModel.getFile(id, body).asResponse());
};

export default { metadata, tool, handler };
