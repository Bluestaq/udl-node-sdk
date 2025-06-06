// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

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

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.scs.groups.list());
};

export default { metadata, tool, handler };
