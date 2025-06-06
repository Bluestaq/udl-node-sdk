// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'onorbitantenna',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/onorbitantenna/{id}',
};

export const tool: Tool = {
  name: 'get_onorbitantenna',
  description:
    'Service operation to get a single OnorbitAntenna record by its unique ID passed as a path parameter. An OnorbitAntenna is the association between on-orbit spacecraft antennas and a particular on-orbit spacecraft. An antenna type may be associated with many different on-orbit spacecraft.',
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
  return asTextContentResult(await client.onorbitantenna.get(id, body));
};

export default { metadata, tool, handler };
