// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'supporting_data.dataowner_types',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/dataowner/getDataOwnerTypes',
};

export const tool: Tool = {
  name: 'list_supporting_data_dataowner_types',
  description: 'Retrieves all distinct data owner types.',
  inputSchema: {
    type: 'object',
    properties: {
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
  const body = args as any;
  return client.supportingData.dataownerTypes.list(body);
};

export default { metadata, tool, handler };
