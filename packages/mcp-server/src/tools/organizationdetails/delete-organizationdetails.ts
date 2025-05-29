// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'organizationdetails',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/organizationdetails/{id}',
};

export const tool: Tool = {
  name: 'delete_organizationdetails',
  description:
    'Service operation to delete an OrganizationDetails specified by the passed ID path parameter. OrganizationDetails represent details of organizations such as a corporation, manufacturer, consortium, government, etc. An organization can have detail records from several sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
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
  return client.organizationdetails.delete(id);
};

export default { metadata, tool, handler };
