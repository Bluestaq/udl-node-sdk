// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'elsets.current',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/elset/current/tuple',
};

export const tool: Tool = {
  name: 'tuple_elsets_current',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService operation to dynamically query/filter current elsets within the system by a variety of query parameters not specified in this API documentation.  A current elset is the currently active, latest elset for an on-orbit object. Current elsets are tracked by source and a source should be provided as a query parameter to this service operation to view the 'current' catalog for a particular provider. If source is not provided, it will be defaulted to '18th SPCS'. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on additional query parameter information.",
  inputSchema: {
    type: 'object',
    properties: {
      columns: {
        type: 'string',
        description:
          'Comma-separated list of valid field names for this data type to be returned in the response. Only the fields specified will be returned as well as the classification marking of the data, if applicable. See the ‘queryhelp’ operation for a complete list of possible fields.',
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
  return asTextContentResult(await client.elsets.current.tuple(body));
};

export default { metadata, tool, handler };
