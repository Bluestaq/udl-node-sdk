// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'h3_geo_hex_cell',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/h3geohexcell',
};

export const tool: Tool = {
  name: 'list_h3_geo_hex_cell',
  description:
    'Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      idH3Geo: {
        type: 'string',
        description: 'Unique identifier of the parent H3 Geo record containing this hex cell. (uuid)',
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
  return client.h3GeoHexCell.list(body);
};

export default { metadata, tool, handler };
