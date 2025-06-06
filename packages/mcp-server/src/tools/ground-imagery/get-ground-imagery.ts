// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'ground_imagery',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/groundimagery/{id}',
};

export const tool: Tool = {
  name: 'get_ground_imagery',
  description:
    'Service operation to get a single GroundImagery record by its unique ID passed as a path parameter. GroundImagery represents metadata about a ground image, as well as the actual binary image data.',
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
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.groundImagery.get(id, body));
};

export default { metadata, tool, handler };
