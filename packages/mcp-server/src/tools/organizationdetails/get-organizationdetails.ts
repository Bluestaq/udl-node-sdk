// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'organizationdetails',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/organizationdetails/{id}',
};

export const tool: Tool = {
  name: 'get_organizationdetails',
  description:
    'Service operation to get a single OrganizationDetails by its unique ID passed as a path parameter. OrganizationDetails represent details of organizations such as a corporation, manufacturer, consortium, government, etc. An organization can have detail records from several sources.',
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
  return client.organizationdetails.get(id, body);
};

export default { metadata, tool, handler };
