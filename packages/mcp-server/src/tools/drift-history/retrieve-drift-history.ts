// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'drift_history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/drifthistory/{id}',
};

export const tool: Tool = {
  name: 'retrieve_drift_history',
  description:
    'Service operation to get a single DriftHistory record by its unique ID passed as a path parameter. DriftHistory represents historical drift rates for GEO Onorbit objects resulting from updates to OnorbitDetails driftRate values.',
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
  return asTextContentResult(await client.driftHistory.retrieve(id, body));
};

export default { metadata, tool, handler };
