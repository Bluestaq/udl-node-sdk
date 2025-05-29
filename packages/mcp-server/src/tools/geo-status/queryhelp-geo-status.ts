// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'geo_status',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/geostatus/queryhelp',
};

export const tool: Tool = {
  name: 'queryhelp_geo_status',
  description:
    'Service operation to provide detailed information on available dynamic query parameters for a particular data type.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return client.geoStatus.queryhelp();
};

export default { metadata, tool, handler };
