// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'seradata_spacecraft_details',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/seradataspacecraftdetails/{id}',
};

export const tool: Tool = {
  name: 'get_seradata_spacecraft_details',
  description:
    'Service operation to get a single SeradataSpacecraftDetails by its unique ID passed as a path parameter.',
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
    return asTextContentResult(await client.seradataSpacecraftDetails.get(id, body));
  } catch (error) {
    if (error instanceof Unifieddatalibrary.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
