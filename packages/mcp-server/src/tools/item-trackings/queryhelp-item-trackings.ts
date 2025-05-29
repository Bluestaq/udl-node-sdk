// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'item_trackings',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/itemtracking/queryhelp',
};

export const tool: Tool = {
  name: 'queryhelp_item_trackings',
  description:
    'Service operation to provide detailed information on available dynamic query parameters for a particular data type.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return client.itemTrackings.queryhelp();
};

export default { metadata, tool, handler };
