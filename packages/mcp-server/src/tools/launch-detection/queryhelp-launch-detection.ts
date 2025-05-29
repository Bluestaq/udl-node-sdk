// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'launch_detection',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/launchdetection/queryhelp',
};

export const tool: Tool = {
  name: 'queryhelp_launch_detection',
  description:
    'Service operation to provide detailed information on available dynamic query parameters for a particular data type.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return client.launchDetection.queryhelp();
};

export default { metadata, tool, handler };
