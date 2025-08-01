// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'elsets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/udl/elset/createBulkFromTLE',
};

export const tool: Tool = {
  name: 'create_bulk_from_tle_elsets',
  description:
    'Service operation to take a multiple TLEs as a POST body and ingest into the database. This operation is not intended to be used for automated feeds into UDL. Data providers should contact the UDL team for specific role assignments and for instructions on setting up a permanent feed through an alternate mechanism.',
  inputSchema: {
    type: 'object',
    properties: {
      dataMode: {
        type: 'string',
        description: 'Data mode of the passed elsets (REAL, TEST, etc).',
      },
      makeCurrent: {
        type: 'boolean',
        description:
          "Boolean indicating if these elsets should be set as the 'current' for their corresponding on-orbit/satellite numbers.",
      },
      source: {
        type: 'string',
        description: 'Source of the elset data.',
      },
      body: {
        type: 'string',
      },
      autoCreateSats: {
        type: 'boolean',
        description:
          "Boolean indicating if a shell Onorbit/satellite should be created if the passed satellite number doesn't exist.",
      },
      control: {
        type: 'string',
        description:
          'Dissemination control of the passed elsets (e.g. to support tagging with proprietary markings).',
      },
      origin: {
        type: 'string',
        description: 'Origin of the elset data.',
      },
      tags: {
        type: 'string',
        description:
          'Optional comma-delineated list of provider/source specific tags for this data, where each element is no longer than 32 characters, used for implementing data owner conditional access controls to restrict access to the data. Should be left null by data providers unless conditional access controls are coordinated with the UDL team.',
      },
    },
    required: ['dataMode', 'makeCurrent', 'source', 'body'],
  },
  annotations: {},
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  const response = await client.elsets.createBulkFromTle(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
