// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'status',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/status/byEntityType/{entityType}',
};

export const tool: Tool = {
  name: 'get_by_entity_type_status',
  description: 'Service operation to get all statuses related to a particular entity type.',
  inputSchema: {
    type: 'object',
    properties: {
      entityType: {
        type: 'string',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { entityType, ...body } = args as any;
  return asTextContentResult(await client.status.getByEntityType(entityType, body));
};

export default { metadata, tool, handler };
