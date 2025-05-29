// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'stage',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/stage/{id}',
};

export const tool: Tool = {
  name: 'get_stage',
  description:
    'Service operation to get a single Stage record by its unique ID passed as a path parameter. A Stage represents various stages of a particular launch vehicle, compiled by a particular source. A vehicle may have multiple stage records.',
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

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.stage.get(id, body);
};

export default { metadata, tool, handler };
