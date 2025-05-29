// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'organization',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/organization/getOrganizationTypes',
};

export const tool: Tool = {
  name: 'get_organization_types_organization',
  description: 'Retrieves all distinct organization types.',
  inputSchema: {
    type: 'object',
    properties: {
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
  return client.organization.getOrganizationTypes(body);
};

export default { metadata, tool, handler };
