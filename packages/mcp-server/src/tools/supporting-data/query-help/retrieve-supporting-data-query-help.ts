// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'supporting_data.query_help',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/dataowner/queryhelp',
};

export const tool: Tool = {
  name: 'retrieve_supporting_data_query_help',
  description:
    'Service operation to provide detailed information on available dynamic query parameters for a particular data type.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.supportingData.queryHelp.retrieve());
};

export default { metadata, tool, handler };
