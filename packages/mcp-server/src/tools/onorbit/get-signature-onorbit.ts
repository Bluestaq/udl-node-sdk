// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'This service queries common information across Radar, EO, and RF observations.',
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
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.onorbit.getSignature(body);
};

export default { metadata, tool, handler };
