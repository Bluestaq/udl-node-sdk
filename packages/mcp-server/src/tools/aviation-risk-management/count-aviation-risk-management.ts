// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'aviation_risk_management',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/aviationriskmanagement/count',
};

export const tool: Tool = {
  name: 'count_aviation_risk_management',
  description:
    'Service operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      idMission: {
        type: 'string',
        description: 'The unique identifier of the mission to which this risk management record is assigned.',
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
  const body = args as any;
  return client.aviationRiskManagement.count(body);
};

export default { metadata, tool, handler };
