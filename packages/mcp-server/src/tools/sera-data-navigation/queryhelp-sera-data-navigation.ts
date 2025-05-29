// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'sera_data_navigation',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/seradatanavigation/queryhelp',
};

export const tool: Tool = {
  name: 'queryhelp_sera_data_navigation',
  description:
    'Service operation to provide detailed information on available dynamic query parameters for a particular data type.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return client.seraDataNavigation.queryhelp();
};

export default { metadata, tool, handler };
