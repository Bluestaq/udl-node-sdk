// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'udl-node-sdk';

export const metadata: Metadata = {
  resource: 'state_vector.current',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/statevector/current',
};

export const tool: Tool = {
  name: 'list_state_vector_current',
  description:
    "Service operation to dynamically query/filter current StateVector data within the system by a variety of query parameters not specified in this API documentation.  A current StateVector is the currently active, latest StateVector for an on-orbit object.  Current state vectors are tracked by source and a source should be provided as a query parameter to this service operation to view the 'current' catalog for a particular provider. Default current state vector sources may vary by UDL environment. Please contact the UDL help desk for more information, or explicitly specify the desired source. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.",
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
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.stateVector.current.list(body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
