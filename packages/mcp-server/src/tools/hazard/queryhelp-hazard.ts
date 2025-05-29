// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'hazard',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/hazard/queryhelp',
};

export const tool: Tool = {
  name: 'queryhelp_hazard',
  description:
    'Service operation to provide detailed information on available dynamic query parameters for a particular data type.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return client.hazard.queryhelp();
};

export default { metadata, tool, handler };
