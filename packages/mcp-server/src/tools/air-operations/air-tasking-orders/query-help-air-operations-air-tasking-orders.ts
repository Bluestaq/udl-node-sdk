// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'air_operations.air_tasking_orders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/airtaskingorder/queryhelp',
};

export const tool: Tool = {
  name: 'query_help_air_operations_air_tasking_orders',
  description:
    'Service operation to provide detailed information on available dynamic query parameters for a particular data type.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return client.airOperations.airTaskingOrders.queryHelp();
};

export default { metadata, tool, handler };
