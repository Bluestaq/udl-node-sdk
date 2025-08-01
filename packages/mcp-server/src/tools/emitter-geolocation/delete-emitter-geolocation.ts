// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'emitter_geolocation',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/emittergeolocation/{id}',
};

export const tool: Tool = {
  name: 'delete_emitter_geolocation',
  description:
    'Service operation to delete a RF geolocation specified by the passed ID path parameter. A specific role is required to perform this service operation. Please contact the UDL team for assistance. Note, delete operations do not remove data from historical or publish/subscribe stores.',
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
  const response = await client.emitterGeolocation.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
