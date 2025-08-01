// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'seradata_sigint_payload',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/seradatasigintpayload/{id}',
};

export const tool: Tool = {
  name: 'delete_seradata_sigint_payload',
  description:
    'Service operation to delete an SeradataSigIntPayload specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.seradataSigintPayload.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
