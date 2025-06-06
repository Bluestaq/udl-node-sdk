// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'solar_array_details',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/solararraydetails',
};

export const tool: Tool = {
  name: 'list_solar_array_details',
  description:
    'Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      classificationMarking: {
        type: 'string',
        description:
          "(One or more of fields 'classificationMarking, dataMode, source' are required.) Classification marking of the data in IC/CAPCO Portion-marked format.",
      },
      dataMode: {
        type: 'string',
        description:
          "(One or more of fields 'classificationMarking, dataMode, source' are required.) Indicator of whether the data is REAL, TEST, SIMULATED, or EXERCISE data. (REAL, TEST, SIMULATED, or EXERCISE)",
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
      source: {
        type: 'string',
        description:
          "(One or more of fields 'classificationMarking, dataMode, source' are required.) Source of the data.",
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.solarArrayDetails.list(body));
};

export default { metadata, tool, handler };
