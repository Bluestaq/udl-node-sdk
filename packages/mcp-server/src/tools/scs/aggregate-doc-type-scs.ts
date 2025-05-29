// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'scs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/scs/aggregateDocType',
};

export const tool: Tool = {
  name: 'aggregate_doc_type_scs',
  description: 'Returns a map of document types and counts in root folder.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  return client.scs.aggregateDocType();
};

export default { metadata, tool, handler };
