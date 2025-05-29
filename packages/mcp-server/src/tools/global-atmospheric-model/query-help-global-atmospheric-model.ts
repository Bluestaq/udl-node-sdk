// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'global_atmospheric_model',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/globalatmosphericmodel/queryhelp',
};

export const tool: Tool = {
  name: 'query_help_global_atmospheric_model',
  description:
    'Service operation to provide detailed information on available dynamic query parameters for a particular data type.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return client.globalAtmosphericModel.queryHelp();
};

export default { metadata, tool, handler };
