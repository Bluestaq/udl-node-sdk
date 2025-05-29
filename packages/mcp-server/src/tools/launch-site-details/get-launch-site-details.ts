// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'launch_site_details',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/launchsitedetails/{id}',
};

export const tool: Tool = {
  name: 'get_launch_site_details',
  description:
    'Service operation to get a single LaunchSiteDetails by its unique ID passed as a path parameter. A LaunchSiteDetails represents details compiled/collected on a launch site by a particular source. A launch site may have several details records.',
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
  return client.launchSiteDetails.get(id, body);
};

export default { metadata, tool, handler };
