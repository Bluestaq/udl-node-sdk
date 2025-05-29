// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'star_catalog',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/starcatalog',
};

export const tool: Tool = {
  name: 'list_star_catalog',
  description:
    'Service operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.',
  inputSchema: {
    type: 'object',
    properties: {
      dec: {
        type: 'number',
        description:
          "(One or more of fields 'dec, ra' are required.) Barycentric declination of the source in International Celestial Reference System (ICRS) at the reference epoch, in degrees.",
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
      ra: {
        type: 'number',
        description:
          "(One or more of fields 'dec, ra' are required.) Barycentric right ascension of the source in the International Celestial Reference System (ICRS) frame at the reference epoch, in degrees.",
      },
    },
  },
};

export const handler = (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.starCatalog.list(body);
};

export default { metadata, tool, handler };
