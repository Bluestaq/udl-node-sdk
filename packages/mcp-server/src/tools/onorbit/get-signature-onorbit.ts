// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'onorbit',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/onorbit/getSignature',
};

export const tool: Tool = {
  name: 'get_signature_onorbit',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis service queries common information across Radar, EO, and RF observations.",
  inputSchema: {
    type: 'object',
    properties: {
      idOnOrbit: {
        type: 'string',
        description: 'ID of the Onorbit object.',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
    },
    required: ['idOnOrbit'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.onorbit.getSignature(body));
};

export default { metadata, tool, handler };
