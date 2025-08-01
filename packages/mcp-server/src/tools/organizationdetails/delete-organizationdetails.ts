// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'organizationdetails',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/organizationdetails/{id}',
};

export const tool: Tool = {
  name: 'delete_organizationdetails',
  description:
    'Service operation to delete an OrganizationDetails specified by the passed ID path parameter. OrganizationDetails represent details of organizations such as a corporation, manufacturer, consortium, government, etc. An organization can have detail records from several sources. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
    required: ['id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.organizationdetails.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
