// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'onorbitsolararray',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/onorbitsolararray/{id}',
};

export const tool: Tool = {
  name: 'get_onorbitsolararray',
  description:
    'Service operation to get a single OnorbitSolarArray record by its unique ID passed as a path parameter. An OnorbitSolarArray is the association between on-orbit spacecraft SolarArrays and a particular on-orbit spacecraft. A SolarArray type may be associated with many different on-orbit spacecraft.',
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
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.onorbitsolararray.get(id, body));
};

export default { metadata, tool, handler };
