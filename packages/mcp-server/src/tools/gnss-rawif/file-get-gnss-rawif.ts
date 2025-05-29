// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'gnss_rawif',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/gnssrawif/getFile/{id}',
};

export const tool: Tool = {
  name: 'file_get_gnss_rawif',
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
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.gnssRawif.fileGet(id, body);
};

export default { metadata, tool, handler };
