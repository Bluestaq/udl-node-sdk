// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'object_of_interest',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/objectofinterest/queryhelp',
};

export const tool: Tool = {
  name: 'queryhelp_object_of_interest',
  description:
    'Service operation to provide detailed information on available dynamic query parameters for a particular data type.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return client.objectOfInterest.queryhelp();
};

export default { metadata, tool, handler };
