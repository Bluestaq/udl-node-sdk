// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'organization',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/organization/getOrganizationCategories',
};

export const tool: Tool = {
  name: 'get_organization_categories_organization',
  description: 'Retrieves all distinct organization categories.',
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

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.organization.getOrganizationCategories(body));
};

export default { metadata, tool, handler };
