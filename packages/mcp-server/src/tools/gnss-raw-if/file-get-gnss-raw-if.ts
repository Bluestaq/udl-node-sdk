// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'gnss_raw_if',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/gnssrawif/getFile/{id}',
};

export const tool: Tool = {
  name: 'file_get_gnss_raw_if',
  description:
    'Service operation to get a single GNSSRAWIF hdf5 file by its unique ID passed as a path parameter. The file is returned as an attachment Content-Disposition.',
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
  return asBinaryContentResult(await client.gnssRawIf.fileGet(id, body));
};

export default { metadata, tool, handler };
