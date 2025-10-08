// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'onorbitthrusterstatus',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/onorbitthrusterstatus/count',
};

export const tool: Tool = {
  name: 'count_onorbitthrusterstatus',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/onorbitthrusterstatus_count_response',\n  $defs: {\n    onorbitthrusterstatus_count_response: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      firstResult: {
        type: 'integer',
      },
      idOnorbitThruster: {
        type: 'string',
        description:
          "(One or more of fields 'idOnorbitThruster, statusTime' are required.) ID of the associated OnorbitThruster record. This ID can be used to obtain additional information on an onorbit thruster object using the 'get  by ID' operation (e.g. /udl/onorbitthruster/{id}). For example, the OnorbitThruster object with idOnorbitThruster = abc would be queried as /udl/onorbitthruster/abc.",
      },
      maxResults: {
        type: 'integer',
      },
      statusTime: {
        type: 'string',
        description:
          "(One or more of fields 'idOnorbitThruster, statusTime' are required.) Datetime of the thruster status observation in ISO 8601 UTC datetime format with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)",
        format: 'date-time',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.onorbitthrusterstatus.count(body)));
};

export default { metadata, tool, handler };
