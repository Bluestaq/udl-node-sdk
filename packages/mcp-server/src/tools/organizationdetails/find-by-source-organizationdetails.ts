// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'organizationdetails',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/organizationdetails/findBySource',
};

export const tool: Tool = {
  name: 'find_by_source_organizationdetails',
  description:
    'Service operation to get a single OrganizationDetails by a source passed as a query parameter. OrganizationDetails represent details of organizations such as a corporation, manufacturer, consortium, government, etc. An organization can have detail records from several sources.',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Organization details name.',
      },
      source: {
        type: 'string',
        description: 'The source of the OrganizationDetails records to find.',
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
  return client.organizationdetails.findBySource(body);
};

export default { metadata, tool, handler };
