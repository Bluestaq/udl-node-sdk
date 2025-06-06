// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/scs/search',
};

export const tool: Tool = {
  name: 'search_scs',
  description: 'Search for files by metadata and/or text in file content.',
  inputSchema: {
    type: 'object',
    properties: {
      path: {
        type: 'string',
        description: 'The path to search from',
      },
      count: {
        type: 'integer',
        description: 'Number of items per page',
      },
      offset: {
        type: 'integer',
        description: 'First result to return',
      },
      contentCriteria: {
        type: 'string',
      },
      metaDataCriteria: {
        type: 'object',
      },
      nonRangeCriteria: {
        type: 'object',
      },
      rangeCriteria: {
        type: 'object',
      },
      searchAfter: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.scs.search(body));
};

export default { metadata, tool, handler };
