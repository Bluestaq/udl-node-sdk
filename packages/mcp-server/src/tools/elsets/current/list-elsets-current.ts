// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'elsets.current',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/elset/current',
};

export const tool: Tool = {
  name: 'list_elsets_current',
  description:
    "Service operation to dynamically query/filter current elsets within the system by a variety of query parameters not specified in this API documentation.  A current elset is the currently active, latest elset for an on-orbit object. Current elsets are tracked by source and a source should be provided as a query parameter to this service operation to view the 'current' catalog for a particular provider. If source is not provided, it will be defaulted to '18th SPCS'. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on additional query parameter information.",
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
  return asTextContentResult(await client.elsets.current.list(body));
};

export default { metadata, tool, handler };
