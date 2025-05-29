// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs.groups',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/scs/groups',
};

export const tool: Tool = {
  name: 'list_scs_groups',
  description: 'Returns a list of all available groups for ACL UIs',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return client.scs.groups.list();
};

export default { metadata, tool, handler };
