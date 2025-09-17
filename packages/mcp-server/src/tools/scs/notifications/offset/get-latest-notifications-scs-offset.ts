// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.notifications.offset',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/scs/notifications/getLatestOffset',
};

export const tool: Tool = {
  name: 'get_latest_notifications_scs_offset',
  description: 'Returns the current/latest offset for the SCS Event Notification Kafka topic.',
  inputSchema: {
    type: 'object',
    properties: {},
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const response = await client.scs.notifications.offset.getLatest().asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
