// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'air_operations.crewpapers',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/udl/crewpapers/unpublish',
};

export const tool: Tool = {
  name: 'unpublish_air_operations_crewpapers',
  description:
    'Service operation to remove supporting PDF from an aircraft sortie or sorties. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      ids: {
        type: 'string',
        description: 'Comma-separated list of AircraftSortie IDs where Crew Papers are unpublished.',
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  await client.airOperations.crewpapers.unpublish(body);
  return asTextContentResult('Successful tool call');
};

export default { metadata, tool, handler };
