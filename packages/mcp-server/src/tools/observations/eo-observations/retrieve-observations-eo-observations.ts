// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'observations.eo_observations',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/eoobservation/{id}',
};

export const tool: Tool = {
  name: 'retrieve_observations_eo_observations',
  description:
    'Service operation to get a single EO observation by its unique ID passed as a path parameter.',
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
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.observations.eoObservations.retrieve(id, body);
};

export default { metadata, tool, handler };
