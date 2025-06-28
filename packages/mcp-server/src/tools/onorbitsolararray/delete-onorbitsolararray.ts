// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'onorbitsolararray',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/udl/onorbitsolararray/{id}',
};

export const tool: Tool = {
  name: 'delete_onorbitsolararray',
  description:
    'Service operation to delete a OnorbitSolarArray object specified by the passed ID path parameter. An OnorbitSolarArray is the association between on-orbit spacecraft SolarArrays and a particular on-orbit spacecraft. A SolarArray type may be associated with many different on-orbit spacecraft. A specific role is required to perform this service operation. Please contact the UDL team for assistance.',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  const response = await client.onorbitsolararray.delete(id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
