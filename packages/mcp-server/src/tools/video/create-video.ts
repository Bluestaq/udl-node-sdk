// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from 'unified-data-library-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Unifieddatalibrary from 'unified-data-library';

export const metadata: Metadata = {
  resource: 'video',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/udl/video',
};

export const tool: Tool = {
  name: 'create_video',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nService operation to take a single Video Stream record as a POST body and ingest into the database. A specific role is required to perform this service operation. Please contact the UDL team for assistance.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      classificationMarking: {
        type: 'string',
        description: 'Classification marking of the data in IC/CAPCO Portion-marked format.',
      },
      dataMode: {
        type: 'string',
        description:
          'Indicator of whether the data is EXERCISE, REAL, SIMULATED, or TEST data:\n\nEXERCISE:&nbsp;Data pertaining to a government or military exercise. The data may include both real and simulated data.\n\nREAL:&nbsp;Data collected or produced that pertains to real-world objects, events, and analysis.\n\nSIMULATED:&nbsp;Synthetic data generated by a model to mimic real-world datasets.\n\nTEST:&nbsp;Specific datasets used to evaluate compliance with specifications and requirements, and for validating technical, functional, and performance characteristics.',
        enum: ['REAL', 'TEST', 'SIMULATED', 'EXERCISE'],
      },
      description: {
        type: 'string',
        description: 'Description/notes associated with the video stream.',
      },
      name: {
        type: 'string',
        description: 'Name of the video stream.',
      },
      source: {
        type: 'string',
        description: 'Source of the data.',
      },
      id: {
        type: 'string',
        description: 'Unique identifier of the record, auto-generated by the system.',
      },
      origin: {
        type: 'string',
      },
      startTime: {
        type: 'string',
        description: 'The timestamp when the stream is available from. The unit is ISO 8601 format.',
        format: 'date-time',
      },
      stopTime: {
        type: 'string',
        description: 'The timestamp when the stream is available until. The unit is ISO 8601 format.',
        format: 'date-time',
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
  const body = args as any;
  const response = await client.video.create(body).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
