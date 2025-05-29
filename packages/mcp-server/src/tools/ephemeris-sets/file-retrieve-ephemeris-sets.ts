// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'ephemeris_sets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/ephemerisset/getFile/{id}',
};

export const tool: Tool = {
  name: 'file_retrieve_ephemeris_sets',
  description:
    'Service operation to get the original raw flat file, if any, associated with the EphemerisSet. The file is returned as an attachment Content-Disposition.',
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
  return client.ephemerisSets.fileRetrieve(id, body);
};

export default { metadata, tool, handler };
