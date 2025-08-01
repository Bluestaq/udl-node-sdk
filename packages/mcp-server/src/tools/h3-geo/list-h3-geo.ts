// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'unified-data-library-mcp/filtering';
import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'h3_geo',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/udl/h3geo',
};

export const tool: Tool = {
  name: 'list_h3_geo',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService operation to dynamically query data by a variety of query parameters not specified in this API documentation. See the queryhelp operation (/udl/&lt;datatype&gt;/queryhelp) for more details on valid/required query parameter information.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    description: 'H3 Geospatial Binning is a discrete global grid system for indexing geographies into a hexagonal grid. The H3 schema is a collection of hexagonal cells that contain data for producing geospatial maps over a specified time span.',\n    properties: {\n      classificationMarking: {\n        type: 'string',\n        description: 'Classification marking of the data in IC/CAPCO Portion-marked format.'\n      },\n      dataMode: {\n        type: 'string',\n        description: 'Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:\\n\\nEXERCISE:&nbsp;Data pertaining to a government or military exercise. The data may include both real and simulated data.\\n\\nREAL:&nbsp;Data collected or produced that pertains to real-world objects, events, and analysis.\\n\\nSIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world datasets.\\n\\nTEST:&nbsp;Specific datasets used to evaluate compliance with specifications and requirements, and for validating technical, functional, and performance characteristics.',\n        enum: [          'REAL',\n          'TEST',\n          'SIMULATED',\n          'EXERCISE'\n        ]\n      },\n      numCells: {\n        type: 'integer',\n        description: 'The number of cells associated with this H3 Geo data set. At this time, UDL supports up to 50,000 cells.'\n      },\n      source: {\n        type: 'string',\n        description: 'Source of the data.'\n      },\n      startTime: {\n        type: 'string',\n        description: 'Start time for this H3 Geo data set in ISO 8601 UTC with millisecond precision.',\n        format: 'date-time'\n      },\n      id: {\n        type: 'string',\n        description: 'Unique identifier of the record, auto-generated by the system.'\n      },\n      centerFreq: {\n        type: 'number',\n        description: 'The center frequency of this H3 Geo data set measured in megahertz.'\n      },\n      createdAt: {\n        type: 'string',\n        description: 'Time the row was created in the database, auto-populated by the system.',\n        format: 'date-time'\n      },\n      createdBy: {\n        type: 'string',\n        description: 'Application user who created the row in the database, auto-populated by the system.'\n      },\n      endTime: {\n        type: 'string',\n        description: 'End time for this H3 Geo data set in ISO 8601 UTC with millisecond precision.',\n        format: 'date-time'\n      },\n      origin: {\n        type: 'string',\n        description: 'Originating system or organization which produced the data, if different from the source. The origin may be different than the source if the source was a mediating system which forwarded the data on behalf of the origin system. If null, the source may be assumed to be the origin.'\n      },\n      origNetwork: {\n        type: 'string',\n        description: 'The originating source network on which this record was created, auto-populated by the system.'\n      },\n      resolution: {\n        type: 'integer',\n        description: 'H3 resolution (0 – 15) for the data set. At this time, UDL supports a resolution of 3 or less.'\n      },\n      sourceDL: {\n        type: 'string',\n        description: 'The source data library from which this record was received. This could be a remote or tactical UDL or another data library. If null, the record should be assumed to have originated from the primary Enterprise UDL.'\n      },\n      type: {\n        type: 'string',\n        description: 'An optional field containing the type of data that is represented by this H3 Geo data set.'\n      }\n    },\n    required: [      'classificationMarking',\n      'dataMode',\n      'numCells',\n      'source',\n      'startTime'\n    ]\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      startTime: {
        type: 'string',
        description:
          'Start time for this H3 Geo data set in ISO 8601 UTC with millisecond precision. (YYYY-MM-DDTHH:MM:SS.sssZ)',
        format: 'date-time',
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
    required: ['startTime'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Unifieddatalibrary, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  const response = await client.h3Geo.list(body).asResponse();
  return asTextContentResult(await maybeFilter(jq_filter, await response.json()));
};

export default { metadata, tool, handler };
