// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'onorbitbattery',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/onorbitbattery/{id}',
};

export const tool: Tool = {
  name: 'get_onorbitbattery',
  description:
    'Service operation to get a single OnorbitBattery record by its unique ID passed as a path parameter. OnorbitBattery is the association between on-orbit spacecraft batteries and a particular on-orbit spacecraft. A Battery may be associated with many different on-orbit spacecraft.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.onorbitbattery.get(id, body));
};

export default { metadata, tool, handler };
