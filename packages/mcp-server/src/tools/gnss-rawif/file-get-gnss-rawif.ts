// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asBinaryContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'gnss_rawif',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/gnssrawif/getFile/{id}',
};

export const tool: Tool = {
  name: 'file_get_gnss_rawif',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService operation to get a single GNSSRAWIF hdf5 file by its unique ID passed as a path parameter. The file is returned as an attachment Content-Disposition.\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asBinaryContentResult(await client.gnssRawif.fileGet(id, body));
};

export default { metadata, tool, handler };
