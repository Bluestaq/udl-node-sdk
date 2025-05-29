// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'operatingunit',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/operatingunit/{id}',
};

export const tool: Tool = {
  name: 'get_operatingunit',
  description:
    'Service operation to get a single Operatingunit record by its unique ID passed as a path parameter. Operatingunit defines a unit or organization which operates or controls a space-related Entity.',
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
  return client.operatingunit.get(id, body);
};

export default { metadata, tool, handler };
