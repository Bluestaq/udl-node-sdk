// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService operation to dynamically query/filter current elsets within the system by a variety of query parameters not specified in this API documentation.  A current elset is the currently active, latest elset for an on-orbit object. Current elsets are tracked by source and a source should be provided as a query parameter to this service operation to view the 'current' catalog for a particular provider. If source is not provided, it will be defaulted to '18th SPCS'. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on additional query parameter information.",
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
    required: [],
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.elsets.current.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
