// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'feature_assessment',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/featureassessment',
};

export const tool: Tool = {
  name: 'query_feature_assessment',
  description:
    'Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      idAnalyticImagery: {
        type: 'string',
        description:
          'Unique identifier of the Analytic Imagery associated with this Feature Assessment record.',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
    },
    required: ['idAnalyticImagery'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.featureAssessment.query(body));
};

export default { metadata, tool, handler };
