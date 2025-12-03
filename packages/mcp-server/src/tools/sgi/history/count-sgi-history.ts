// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'sgi.history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/sgi/history/count',
};

export const tool: Tool = {
  name: 'count_sgi_history',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService operation to return the count of records satisfying the specified query parameters. This operation is useful to determine how many records pass a particular query criteria without retrieving large amounts of data. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/history_count_response',\n  $defs: {\n    history_count_response: {\n      type: 'string'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      effectiveDate: {
        type: 'string',
        description:
          "(One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time the data was received and processed from the source. Typically a source provides solar data for a date window with each transmission including past, present, and future predicted values. (YYYY-MM-DDTHH:MM:SS.sssZ)",
        format: 'date-time',
      },
      firstResult: {
        type: 'integer',
      },
      maxResults: {
        type: 'integer',
      },
      sgiDate: {
        type: 'string',
        description:
          "(One or more of fields 'effectiveDate, sgiDate' are required.) ISO8601 UTC Time of the index value. This could be a past, current, or future predicted value. Note: sgiDate defines the start time of the time window for this data record. (YYYY-MM-DDTHH:MM:SS.sssZ)",
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
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.sgi.history.count(body)));
  } catch (error) {
    if (error instanceof Unifieddatalibrary.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
