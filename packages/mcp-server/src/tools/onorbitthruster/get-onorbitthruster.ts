// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'onorbitthruster',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/onorbitthruster/{id}',
};

export const tool: Tool = {
  name: 'get_onorbitthruster',
  description:
    "Service operation to get a single OnorbitThruster record by its unique ID passed as a path parameter. An OnorbitThruster is the association between an on-orbit spacecraft's engine and a particular on-orbit spacecraft. An Engine type may be associated with many different on-orbit spacecraft.",
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
  try {
    return asTextContentResult(await client.onorbitthruster.get(id, body));
  } catch (error) {
    if (error instanceof Unifieddatalibrary.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
