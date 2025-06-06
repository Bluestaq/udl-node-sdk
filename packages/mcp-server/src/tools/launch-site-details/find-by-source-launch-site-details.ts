// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'launch_site_details',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/launchsitedetails/findBySource',
};

export const tool: Tool = {
  name: 'find_by_source_launch_site_details',
  description:
    'Service operation to get a single LaunchSiteDetails by a source passed as a query parameter. A LaunchSiteDetails represents details compiled/collected on a launch site by a particular source. A launch site may have several details records.',
  inputSchema: {
    type: 'object',
    properties: {
      source: {
        type: 'string',
        description: 'The source of the LaunchSiteDetails records to find.',
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
  const body = args as any;
  return asTextContentResult(await client.launchSiteDetails.findBySource(body));
};

export default { metadata, tool, handler };
