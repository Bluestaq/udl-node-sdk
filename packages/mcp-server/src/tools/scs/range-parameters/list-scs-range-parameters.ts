// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.range_parameters',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/scs/listRangeParameters',
};

export const tool: Tool = {
  name: 'list_scs_range_parameters',
  description: 'Returns a set of File Metadata that can be used for search endpoint.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return client.scs.rangeParameters.list();
};

export default { metadata, tool, handler };
