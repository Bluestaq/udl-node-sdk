// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'operatingunit',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/operatingunit/{id}',
};

export const tool: Tool = {
  name: 'delete_operatingunit',
  description:
    'Service operation to delete an Operatingunit object specified by the passed ID path parameter. Operatingunit defines a unit or organization which operates or controls a space-related Entity. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.operatingunit.delete(id);
};

export default { metadata, tool, handler };
