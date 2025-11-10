// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'report_and_activities.udl_sigact',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/sigact/getFile/{id}',
};

export const tool: Tool = {
  name: 'file_get_report_and_activities_udl_sigact',
  description:
    'Service operation to get a single SigAct text file by its unique ID passed as a path parameter. The text file is returned as an attachment Content-Disposition.',
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
  return asBinaryContentResult(await client.reportAndActivities.udlSigact.fileGet(id, body).asResponse());
};

export default { metadata, tool, handler };
