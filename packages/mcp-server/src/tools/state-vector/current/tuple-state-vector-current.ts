// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'state_vector.current',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/statevector/current/tuple',
};

export const tool: Tool = {
  name: 'tuple_state_vector_current',
  description:
    "Service operation to dynamically query/filter current StateVector data within the system by a variety of query parameters not specified in this API documentation.  A current StateVector is the currently active, latest StateVector for an on-orbit object.  Current state vectors are tracked by source and a source should be provided as a query parameter to this service operation to view the 'current' catalog for a particular provider. Default current state vector sources may vary by UDL environment. Please contact the UDL help desk for more information, or explicitly specify the desired source. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.",
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
    required: ['columns'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.stateVector.current.tuple(body));
};

export default { metadata, tool, handler };
